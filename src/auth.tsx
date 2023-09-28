import { authOptions } from "./app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

const isLogin = () => {
  const session = getServerSession(authOptions);
  return session;
};

const isAdmin = () => {
  const session = getServerSession(authOptions);
  // if (session && session.user.role === "ADMIN") {
  //   return true;
  // } else {
  //   return false;
  // }
};

export { isLogin };
