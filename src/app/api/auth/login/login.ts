import prisma from "@/db/prisma";
import { NextResponse } from 'next/server'
import bcrypt from "bcrypt";

export async function POST (req: Request, res: Response){

    const { email, password } = await req.json();
    if (await prisma.user.findFirst({where: {email}})) {
        const user = await prisma.user.findFirst({where: {email}});
        if ( user && await bcrypt.compare(password, user.password)) {
            return new Response(JSON.stringify(user), { status: 201 });
        } else {
            return new Response("Wrong password", { status: 400 });
        }
        
    }

    return new Response("User does not exist", { status: 400 });

}