import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import fs from 'fs';
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest, res: NextResponse) {

  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ success: false });
  }else{
  console.log(session);
    const data = await req.formData();
    const image = data.get("image") as File | null;
  
    if (!image) {
      return NextResponse.json({ success: false });
    }
  
    try {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const extension = image.name.split(".")[1];

      const newFileName = `${Date.now()}.${extension}`;
      // Spécifiez le chemin complet du fichier de destination dans le dossier "public"
      const pathToFile = join(process.cwd(), "public", "assets", "images", "uploads", newFileName);
  
      // Vérifiez si le répertoire "public/assets/images/uploads" existe, sinon créez-le
      if (!fs.existsSync(join(process.cwd(), "public", "assets", "images", "uploads"))) {
        fs.mkdirSync(join(process.cwd(), "public", "assets", "images", "uploads"), { recursive: true });
      }
  
      // Écrivez le fichier dans le dossier "public/assets/images/uploads"
      fs.writeFileSync(pathToFile, buffer);
  
      console.log(`Fichier enregistré dans le dossier public : assets/images/uploads/${newFileName}`);
      console.log(data.get("category"));
      if (session && session.user && session.user.email) {
        await prisma.post.create({
          data: {
            title: data.get("title") as string,
            description: data.get("description") as string,
            content: data.get("content") as string,
            image: `/assets/images/uploads/${newFileName}`,
            user: {
              connect: {
                email: session.user.email as string,
              },
            },
            category: {
              connect: {
                id: Number(data.get("category")) as unknown as number,
              },
            },
          },
        });
      }else{
        return NextResponse.json({ success: false });
      }
      return NextResponse.json({ success: true, path: `/assets/images/uploads/${newFileName}` });
    } catch (error: any) {
      console.error('Erreur lors du traitement de l\'image :', error);
      return NextResponse.json({ success: false, error: error.message });
    }
  }
}