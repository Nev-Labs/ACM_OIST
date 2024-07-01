'use client';
import { motion, useInView } from 'framer-motion';
import PageHead from '@/components/util/pageheading';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardImage } from '@/components/ui/teamcard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SocialIconList from '@/components/ui/sociallink';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface LinkObj {
  platform: 'email' | 'github' | 'linkedin' | 'insta' | 'twitter';
  link: string;
}

interface Member {
  id: number;
  name: string;
  img: string;
  position: string;
  links: LinkObj[];
}

const members22: Member[] = [];

const Members: Member[] = [
  {
    id: 5338273,
    name: 'Shreyaansh Shrivastava',
    img: 'shreyaansh_img.jpg',
    position: 'Chair',
    links: [
      {
        platform: 'insta',
        link: 'https://www.instagram.com/mind_freak._x?igsh=ODhvMjMxcm5pZXJi',
      },
      {
        platform: 'email',
        link: '#',
      },
    ],
  },
  {
    id: 917234,
    name: 'Simmi Sinha',
    img: 'simmi_img.jpg',
    position: 'Chair',
    links: [
      {
        platform: 'linkedin',
        link: 'https://www.linkedin.com/in/simmi-sinha-4261a3258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        platform: 'github',
        link: 'https://github.com/Simmi7934',
      },
      {
        platform: 'email',
        link: 'mailto:simmi7934@gmail.com',
      }
    ],
  },
  {
    id: 9740089,
    name: 'Niharika Jha',
    img: 'niharika_img.jpg',
    position: 'Vice Chair',
    links: [
      {
        platform: 'email',
        link: 'mailto:niharikajha0914@gmail.com',
      },
      {
        platform: 'linkedin',
        link: 'https://www.linkedin.com/in/niharikajha0521/',
      },
      {
        platform: 'github',
        link: 'https://github.com/Niharikajha01',
      },
    ],
  },
  {
    id: 2684060,
    name: 'Nitesh Kumar',
    img: 'nitesh_img.jpg',
    position: 'Vice Chair',
    links: [
      {
        platform: 'insta',
        link: 'https://www.instagram.com/musicalnitesh?igsh=MWk0eDl0cXNwYmxzdw==',
      },
      {
        platform: 'linkedin',
        link: 'https://www.linkedin.com/in/nitesh-kumar-199a0b23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    ],
  },
  {
    id: 3187615,
    name: 'Mimansha Pranjal',
    img: 'mimansha_img.jpg',
    position: 'Membership Chair',
    links: [
      {
        platform: 'twitter',
        link: 'https://x.com/Mimansha_07',
      },
      {
        platform: 'insta',
        link: 'https://www.instagram.com/_mimansha.13_/',
      },
      {
        platform: 'linkedin',
        link: 'https://in.linkedin.com/in/mimanshapranjal13',
      },
    ],
  },
  {
    id: 8665957,
    name: 'Bharat Jain',
    img: 'bharat_img.jpeg',
    position: 'Secretary',
    links: [
      {
        platform: 'email',
        link: 'mailto:bharatjain0805@gmail.com',
      },
      {
        platform: 'insta',
        link: 'https://www.instagram.com/bharatjain_0805',
      },
      {
        platform: 'linkedin',
        link: 'www.linkedin.com/in/bharatjain0805',
      },
    ],
  },
  {
    id: 7726077,
    name: 'Priyanshu Acharya',
    img: 'priyanshu_img.png',
    position: 'Treasurer',
    links: [
      {
        platform: 'github',
        link: 'https://github.com/PriyanshuAcharya41',
      },
      {
        platform: 'linkedin',
        link: 'www.linkedin.com/in/priyanshu-acharya-19164b255',
      },
      {
        platform: 'insta',
        link: 'https://www.instagram.com/priyanshu_acharya41/',
      },
    ],
  },
  {
    id: 2,
    name: 'Shiv Vardhan Singh Sikarwar',
    img: 'shiv_img1.jpg',
    position: 'Web Master',
    links: [
      {
        platform: 'github',
        link: 'https://github.com/Shivvardhan',
      },
      {
        platform: 'email',
        link: 'mailto:shivvardhan52@gmail.com',
      },
      {
        platform: 'linkedin',
        link: 'https://www.linkedin.com/in/shiv-vardhan-singh-sikarwar-59aa52226/',
      },
    ],
  },
  {
    id: 3,
    name: 'Poonam Raghuwanshi',
    img: 'poonam_img.jpg',
    position: 'Treasurer',
    links: [
      {
        platform: 'github',
        link: 'https://github.com/poonamraghuwanshi26',
      },
      {
        platform: 'linkedin',
        link: 'https://www.linkedin.com/in/poonam-raghuwanshi-bba721289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    ],
  }
];



const members23: Member[] = [
  {
    id: 3,
    name: 'Ashish Baghel',
    img: 'img_2.jpg',
    position: 'member',
    links: [
      {
        platform: 'github',
        link: 'https://github.com/nevernever69',
      },
      {
        platform: 'email',
        link: 'mailto:nevernever955@gmail.com',
      },
    ],
  }
];

const members24: Member[] = [];

const Team = () => {
  return (
    <div className="mx-auto max-w-7xl  px-6 lg:px-8">
          <div className="mt-20">
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
            <Tabs defaultValue="tab3" className="justify-center">
              <div className="flex justify-center items-center mb-10 lg:items-center">
                <TabsList aria-label="My Tabs">
             
                  <TabsTrigger value="tab2">2023</TabsTrigger>
                  <TabsTrigger value="tab3">2024</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="tab3">
                <PageHead title="2024" />
                <div className="flex flex-wrap  p-4">
                  {Members.length > 0 ? (
                    Members.map((data) => (
                      <motion.div
                        className="p-6"
                        key={data.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Card className="max-w-sm mx-auto">
                          <CardHeader className="text-white">
                            <CardImage src={`/team/${data.img}`} alt="Card Image" />
                            <CardTitle>{data.name}</CardTitle>
                            <CardDescription>{data.position}</CardDescription>
                          </CardHeader>
                          <CardFooter className="bg-white-100">
                            <SocialIconList links={data.links} />
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <p className="p-10 my-10">The data is yet to be uploaded</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
            </motion.div>
            
          </div>
        
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
        </div>


  );
};

export default Team;