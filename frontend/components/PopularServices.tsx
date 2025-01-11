'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { TriangleIcon } from './TriangleIcon'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const services = [
  {
    id: 1,
    title: 'Professional Logo Design',
    seller: 'John Doe',
    rating: 4.9,
    reviews: 2431,
    price: 0.1,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 2,
    title: 'Website Development',
    seller: 'Jane Smith',
    rating: 4.8,
    reviews: 1892,
    price: 0.1,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    seller: 'Marketing Pro',
    rating: 4.7,
    reviews: 1245,
    price: 0.1,
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: 4,
    title: 'Video Editing',
    seller: 'Creative Studios',
    rating: 4.9,
    reviews: 3210,
    price: 0.1,
    image: '/placeholder.svg?height=200&width=300'
  }
]

export default function PopularServices() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/services/${service.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium">{service.seller}</span>
                      <div className="flex items-center ml-auto">
                        <TriangleIcon className="text-green-500 fill-green-500" />
                        <span className="ml-1 text-sm">{service.rating}</span>
                        <span className="text-sm text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    <h3 className="font-medium line-clamp-2">{service.title}</h3>
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <p className="text-sm text-gray-500">Starting at</p>
                  <p className="ml-auto font-bold">{service.price} ETH</p>
                </CardFooter>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

