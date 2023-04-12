import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export interface EmojiData {
  icon: string;
  name: string;
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { prompt } = JSON.parse(req.body);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content:
            "You are on a website that searches for emojis using natural language, so everything I write, you respond with the emoji(s) that you think most closely resembles it, separated by commas. Next to the emoji, put the name of the emoji in the prompt language, separated by #. Always give 6 alternatives or less. If you can't, return 'Went wrong', okay?",
        },
        {
          role: "user",
          content: "Emoji of: feliz",
        },
        {
          role: "assistant",
          content: "😀#sorridente,😉#piscando,🥰#amor",
        },
        {
          role: "user",
          content: "Emoji of: smile",
        },
        {
          role: "assistant",
          content: "😀#smiling,😉#blinking,🥰#love",
        },
        {
          role: "user",
          content: `Emoji of: ${prompt}`,
        },
      ],
    });

    const emojis = completion.data.choices[0].message?.content?.split(",");

    const emojisOptions = emojis?.map((emoji) => {
      const [emojiCode, emojiName] = emoji.split("#");

      const emojiNameWithoutUnderline = emojiName?.replace(/ /g, "_");

      if (emojiCode.toLocaleLowerCase().includes("went wrong") || !emojiName) {
        throw new Error("Something went wrong");
      }

      return {
        icon: emojiCode,
        name: emojiNameWithoutUnderline,
      };
    }) as EmojiData[];

    return res.status(200).json({ emojisOptions });
  } catch (error) {
    return res.status(400).json({ error });
  }
}
