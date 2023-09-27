import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import fs from 'fs';

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData();
    const image = data.get("image") as File | null;
  
    if (!image) {
      return NextResponse.json({ success: false });
    }
  
    try {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
  
      const fileName = image.name;
  
      // Spécifiez le chemin complet du fichier de destination dans le dossier "public"
      const pathToFile = join(process.cwd(), "public", "uploads", fileName);
  
      // Vérifiez si le répertoire "public/uploads" existe, sinon créez-le
      if (!fs.existsSync(join(process.cwd(), "public", "uploads"))) {
        fs.mkdirSync(join(process.cwd(), "public", "uploads"), { recursive: true });
      }
  
      // Écrivez le fichier dans le dossier "public/uploads"
      fs.writeFileSync(pathToFile, buffer);
  
      console.log(`Fichier enregistré dans le dossier public : /uploads/${fileName}`);
      return NextResponse.json({ success: true, path: `/uploads/${fileName}` });
    } catch (error: any) {
      console.error('Erreur lors du traitement de l\'image :', error);
      return NextResponse.json({ success: false, error: error.message });
    }

}