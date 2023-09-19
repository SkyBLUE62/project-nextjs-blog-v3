import  CredentialsProvider  from 'next-auth/providers/credentials';
import NextAuth, {NextAuthOptions} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const {email, password} = credentials as {email: string, password: string};

                if (await prisma.user.findFirst({where: {email}})) {
                    const user = await prisma.user.findFirst({where: {email}});
                    if ( user && await bcrypt.compare(password, user.password)) {
                        return user;
                    } else {
                        return null; 
                    }
                
                }
                return null;
            }
        })
    ],

}

export default NextAuth(authOptions)

