import { PrismaClient } from '../prisma/prisma'

const prisma = new PrismaClient()


async function main(){
  try{
    const user = await prisma.user.create({
        data: {
          name: 'Alice',
          },
      })
    console.log(user)
    const users = await prisma.user.findMany()
    console.log(users)
    
  }
  catch(e) {
    console.error(e)
    await prisma.$disconnect()
    //process.exit(1)
  }
  finally{
    await prisma.$disconnect();
  }
}


main();