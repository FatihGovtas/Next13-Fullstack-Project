import Image from 'next/image'
import prisma from "@/libs/prismadb";

export default async function Home() {
  const listings = await prisma.listing.findMany(
    {
      orderBy: {
        createdAt: "desc"
      }
    }
  );
  return (
    <div className='flex items-center flex-wrap'>
      {
        listings?.map((list, i) => (
          <div className='flex flex-col w-[250px] border rounded-lg p-3 items-center justify-center m-2' key={i}>
            <Image src={list.imageSrc} width={200} height={200} alt=''/>
            <div className='text-xl tracking-wider mt-2'>
              {list.category} - {list.locationValue}
            </div>
          </div>
        ))
      }
    </div>
  )
}
