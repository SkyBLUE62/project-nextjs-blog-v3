import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

        const post = await prisma.post.create({
            data:{
                title:"Richird Norton photorealistic rendering as real photos",
                description:"Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
                image: "bigPost.png",
                published:true,
                userId:1,
                categoryId:1,
                editorPick:false,
                bigPost:false,
            }
        })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })