import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const categories = [
  {
    id: 1,
    name: 'Graphics & Design',
    image: '/placeholder.svg?height=200&width=200',
    count: '12,345'
  },
  {
    id: 2,
    name: 'Digital Marketing',
    image: '/placeholder.svg?height=200&width=200',
    count: '8,765'
  },
  {
    id: 3,
    name: 'Writing & Translation',
    image: '/placeholder.svg?height=200&width=200',
    count: '6,543'
  },
  {
    id: 4,
    name: 'Video & Animation',
    image: '/placeholder.svg?height=200&width=200',
    count: '5,432'
  },
  {
    id: 5,
    name: 'Music & Audio',
    image: '/placeholder.svg?height=200&width=200',
    count: '4,321'
  },
  {
    id: 6,
    name: 'Programming & Tech',
    image: '/placeholder.svg?height=200&width=200',
    count: '9,876'
  }
]

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.name.toLowerCase().replace(' & ', '-')}`}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

