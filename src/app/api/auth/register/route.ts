import bcrypt from "bcrypt";
import prisma from "@/db/prisma";
import { NextResponse } from 'next/server'

type userData = {
    name: string,
    email: string,
    password: string,
    job: string
}

export async function POST(req: Request, res: Response) {
    const { name, email, password, job }: userData = await req.json();
    const passwordHash: string = await bcrypt.hash(password, 10);
    if (await prisma.user.findUnique({ where: { email } })) {
        return new Response("User already exists", { status: 400 });
    }

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password : passwordHash,
                job,
            },
        });
        return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        return new Response("Erreur lors de l'inscription", { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
};


export const GET = async (req: Request, res: Response) => {
 return new Response("hello register")
}
