import { NextApiResponse } from "next";
import { MagicUserMetadata } from "magic-sdk";
import Iron from "@hapi/iron";
import { CookieSerializeOptions, serialize } from "cookie";

const MAX_AGE = 60 * 60 * 8; // 8 hours
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

const setTokenCookie = (res: NextApiResponse, token: string) => {
  const cookieOptions: CookieSerializeOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: MAX_AGE,
    path: "/",
    sameSite: "lax",
  };

  const cookie = serialize("token", token, cookieOptions);
  res.setHeader("Set-Cookie", cookie);
};

export const setLoginSession = async (
  res: NextApiResponse,
  metadata: MagicUserMetadata
) => {
  const session = {
    ...metadata,
    createdAt: Date.now(),
    maxAge: MAX_AGE,
  };

  const token = await Iron.seal(session, TOKEN_SECRET, Iron.defaults);
  setTokenCookie(res, token);
};
