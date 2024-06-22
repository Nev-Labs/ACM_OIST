'use client';
import { motion, useInView } from 'framer-motion';
import PageHead from '@/components/util/pageheading';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardImage } from '@/components/ui/teamcard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SocialIconList from '@/components/ui/sociallink';

interface LinkObj {
  platform: 'email' | 'github' | 'linkedin';
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

const members23: Member[] = [
  {
    id: 1,
    name: 'Ashish bhagel',
    img: 'img_2.jpg',
    position: 'ACM Member',
    links: [
      {
        platform: 'github',
        link: '#',
      },
      {
        platform: 'email',
        link: '#',
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
    name: 'Simmi Sinha',
    img: 'img_2.jpg',
    position: 'Chair',
    links: [
      {
        platform: 'github',
        link: '#',
      },
      {
        platform: 'email',
        link: '#',
      },
    ],
  }
];

const members24: Member[] = [];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-0 sm:pt-10">
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
          <div className="mt-6 lg:flex justify-center lg:items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
            <Tabs defaultValue="tab2" className="justify-center">
              <div className="flex justify-center items-center mb-10 lg:items-center">
                <TabsList aria-label="My Tabs">
                  <TabsTrigger value="tab1">2022</TabsTrigger>
                  <TabsTrigger value="tab2">2023</TabsTrigger>
                  <TabsTrigger value="tab3">2024</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="tab1">
                <PageHead title="2022" />
                <div className="flex flex-wrap justify-center p-4">
                  {members22.length > 0 ? (
                    members22.map((data) => (
                      <motion.div
                        className="p-4"
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
              <TabsContent value="tab2">
                <PageHead title="2023" />
                <div className="flex flex-wrap justify-center p-4">
                  {members23.length > 0 ? (
                    members23.map((data) => (
                        <motion.div
                        className="p-4"
                        key={data.id}
                        initial="hidden"
                        animate="show"
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          show: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              staggerChildren: 0.2,
                            },
                          },
                        }}
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
              <TabsContent value="tab3">
                <PageHead title="2024" />
                <div className="flex flex-wrap justify-center p-4">
                  {members24.length > 0 ? (
                    members24.map((data) => (
                      <motion.div
                        className="p-4"
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
        </div>
      </main>
    </div>
  );
};

export default Team;