"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  role: "ADMIN" | "USER";
  randomKey: string;
};

const dashboard = async () => {
  const session: { user: User } | null = await getServerSession(authOptions);
  console.log(session?.user);
  if (!session || session.user.role !== "ADMIN") {
    redirect("/");
  }

  return <h1>dashboard Admin</h1>;
};

export default dashboard;
