import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import AppleProvider from "next-auth/providers/apple"


const prisma = new PrismaClient();

const handler = NextAuth()

export {handler as GET, handler as POST}