import { authOptions } from "./app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

const isLogin = () => {
  const session = getServerSession(authOptions);
  return session;
};

export { isLogin };
