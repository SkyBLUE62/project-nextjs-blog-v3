import bcrypt from "bcrypt";
import prisma from "@/db/prisma";

type userData = {
    name: string,
    email: string,
    password: string,
    job: string
}

export async function POST(req: Request, res: Response) {
    const { name, email, password, job }: userData = await req.json();

    if (await prisma.user.findUnique({ where: { email } })) {
        return new Response("User already exists", { status: 400 });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
            name,
            job,
          },
        });

        return new Response(JSON.stringify(user), { status: 201 });

      } catch (error) {
        return new Response("Register Error", { status: 500 });
      }
};
