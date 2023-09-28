"use server";

import { getServerSession } from "next-auth";

const dashboard = async () => {
  const session = await getServerSession();
  console.log(session);
  return <h1>dashboard Admin</h1>;
};

export default dashboard;
