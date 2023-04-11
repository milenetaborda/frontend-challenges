import { NextApiRequest, NextApiResponse } from "next";
import { Magic } from "@magic-sdk/admin";
import { setLoginSession } from "@/lib/auth";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const didToken = (req.headers.authorization as string).split("Bearer ")[1];
  const magic = new Magic(process.env.MAGIC_SECRET_KEY);
  const metadata = await magic.users.getMetadataByToken(didToken);

  await setLoginSession(res, metadata);

  res.send({ done: true });
}
