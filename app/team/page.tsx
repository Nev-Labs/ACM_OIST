'use client'
import PageHead from "@/components/util/pageheading";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardImage } from "@/components/ui/teamcard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SocialIconList from "@/components/ui/sociallink";

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
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
            
          </div>
          <div className="lg:flex justify-center lg:items-center">
          <Tabs defaultValue="tab1" className="justify-center">
          <div className="lg:flex justify-center mb-10 lg:items-center">
            <TabsList aria-label="My Tabs">
                <TabsTrigger value="tab1">2022</TabsTrigger>
                <TabsTrigger value="tab2">2023</TabsTrigger>
                <TabsTrigger value="tab3">2024</TabsTrigger>
            </TabsList>
          </div>
      <TabsContent value="tab1">
      <PageHead title="2022"/>
            <div className="flex flex-wrap justify-center p-4">
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage src={`/team/img_1.jpg`} alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage src={`/team/img_2.jpg`} alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage src={`/team/img_1.jpg`} alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage src={`/team/img_2.jpg`} alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
      <PageHead title="2023"/>
            <div className="flex flex-wrap justify-center p-4">
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
      <PageHead title="2024"/>
            <div className="flex flex-wrap justify-center p-4">
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4">
                <Card className="max-w-sm mx-auto">
                    <CardHeader className="text-white">
                        <CardImage  src="https://nitsurat.acm.org/static/allteams/185.jpg" alt="Card Image" />
                        <CardTitle>Ashish Baghel</CardTitle>
                        <CardDescription>ACM Member</CardDescription>
                    </CardHeader>
                    <CardFooter className="bg-white-100">
                        <SocialIconList/>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </TabsContent>
    </Tabs>
          </div>
            
        </div>
      </main>
    </div>
    )
}
export default Team;