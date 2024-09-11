import PageHead from "@/components/util/pageheading";
import Image from "next/image";
export default function Home() {

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-2 lg:px-8">
        <div className="mt-20">
          <PageHead title="About Us" subTitle="Team"/>
          <div className="columns-2 flex py-14">
          <div className="w-full max-w-96 flex justify-center items-center">
            <Image 
            style={{ width: '200px', height: '200px' }}
            className="object-cover"
            src={`/logo1.png`}
            alt={`Image`}
            width={200}
            height={150}
            ></Image>
          </div>
          <div className="w-full max-w-96 flex justify-center text-justify">
            <h3 className="text-md">ACM NIT Surat student chapter, established in 2005, is an integral part of the International  Learned Society for Computing, ACM. Comprising a dedicated team of computing educators, researchers, and professionals,  the chapter aims to inspire dialogue, resource-sharing, and tackling challenges in the field of computing. Through a wide array of engaging activities like coding challenges, hackathons, quizzes, and application development, the chapter has fostered an environment of learning, fun, and productivity. Its reputation within the institute is exceptional, evident from the massive turnout at every event. With its ambitious goals, including the nationwide recognition of  events like Epiphany and Dotslash, ACM NIT Surat is constantly raising the bar and making a significant impact in the  world of technology and education.</h3>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
