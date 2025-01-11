import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Clock, RefreshCcw, MessageSquare } from 'lucide-react'
import { TriangleIcon } from '@/components/TriangleIcon'

export default function ServiceDetail({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">I will create a professional website design</h1>
          
          <div className="flex items-center mb-6">
            <div className="relative h-12 w-12 mr-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Seller"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-medium">John Doe</h2>
              <div className="flex items-center">
                <TriangleIcon className="text-green-500 fill-green-500" />
                <span className="ml-1">4.9</span>
                <span className="text-gray-500 ml-1">(2,431)</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] mb-8">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Service preview"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="about">About the Seller</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <h3 className="text-xl font-semibold mb-4">About This Service</h3>
              <p className="text-gray-600 mb-4">
                I will create a professional, modern, and responsive website design that perfectly matches your brand and business needs. With over 5 years of experience in web design, I ensure high-quality work and excellent communication throughout the project.
              </p>
              <h4 className="font-semibold mb-2">What's Included:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Custom design tailored to your brand</li>
                <li>Responsive layout for all devices</li>
                <li>Modern UI/UX best practices</li>
                <li>Source files included</li>
                <li>Unlimited revisions</li>
              </ul>
            </TabsContent>
            <TabsContent value="about" className="mt-6">
              <h3 className="text-xl font-semibold mb-4">About The Seller</h3>
              <p className="text-gray-600 mb-4">
                Professional web designer with 5+ years of experience. Specialized in creating modern, responsive websites for businesses of all sizes. Bachelor's degree in Digital Design and certified in UI/UX design.
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Reviews</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="relative h-8 w-8 mr-2">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="Reviewer"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">User Name</p>
                        <div className="flex items-center">
                          <TriangleIcon className="text-green-500 fill-green-500" />
                          <span className="ml-1 text-sm">5.0</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Excellent work! The designer was very professional and delivered exactly what I needed.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pricing Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Standard Package</h3>
                <p className="text-2xl font-bold">0.1 ETH</p>
              </div>
              <p className="text-gray-600 mb-6">
                Complete website design with all source files and documentation
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-500" />
                  <span>3 Days Delivery</span>
                </div>
                <div className="flex items-center">
                  <RefreshCcw className="h-5 w-5 mr-2 text-gray-500" />
                  <span>3 Revisions</span>
                </div>
              </div>
              <Button className="w-full mb-4">Continue (0.1 ETH)</Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Seller
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

