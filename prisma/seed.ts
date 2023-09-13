import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

  const post = await prisma.post.create({
    data:{
        title:"Richird Norton photorealistic rendering as real photos",
        description:"Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
        image: "bigPost.png",
        published:true,
        userId:"clmhwjxhw0000v51o7usq6u96",
        categoryId:4,
        editorPick:false,
        bigPost:false,
        popularTopics:true,
        slide:true
    }
})


// const category = await prisma.category.createMany({
// data:[
// {
//   name: "adventure",
// },
// {
//   name: "fashion",
// },
// {
//   name: "technologies",
// },
// {
//   name: "travel",
// },
// {
//   name: "Branding",
// },

// ]
// })
  

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