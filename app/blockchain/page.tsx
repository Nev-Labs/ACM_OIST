'use client'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AnimatePresence, motion, useInView } from "framer-motion";


const Home = () => {
    const data = {
        "events": {
            "short": "blockchain",
            "title": "Blockchain Innovations: ACM Symposium at Oriental Institute of Science and Technology",
            "date":" May 8, 2024",
            "description": "The ACM (Association for Computing Machinery) at the Oriental Institute of Science and Technology is hosting an event focused on Blockchain technology on the 8th of May, 2024. This event will gather experts, researchers, and enthusiasts to discuss the latest innovations, applications, and future directions of Blockchain technology. Attendees will benefit from insightful presentations, engaging panel discussions, and valuable networking opportunities. The event aims to promote collaboration and knowledge sharing, highlighting the transformative impact of Blockchain across various sectors.",
            "summary": "The ACM at the Oriental Institute of Science and Technology is organizing a Blockchain event on May 8, 2024. The event will feature expert talks, panel discussions, and networking sessions centered around the latest innovations and applications of Blockchain technology. It aims to bring together professionals and enthusiasts to foster collaboration and highlight the transformative potential of Blockchain."
            },

     
    }
    
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80eeff] to-[#80eeff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
      
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                  <Card className=" shadow-2xl rounded-xl bg-cover relative z-0 transition-all duration-300 hover:scale-105">
                    <Image width={500} height={200} src={`/blockchain.jpg`} alt="image description" className='w-full h-full' quality={100} />
                    <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2">
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                  </Card>
                  <div>
                    <h2 className="font-bold text-2xl ">{data.events.title}</h2>
                    <p>{data.events.date}</p>
                    <div className='pb-8'>  <Separator /></div>
                  
                    <h2 className="text-xl">{data.events.description}</h2>
                  </div>
              </dl>
              
              </motion.div>
              
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div >
     
    
  
    </>
  )
  
}
export default Home