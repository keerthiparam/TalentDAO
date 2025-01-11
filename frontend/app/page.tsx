import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import PopularServices from '@/components/PopularServices'
import CategoryGrid from '@/components/CategoryGrid'
import { Star } from 'lucide-react'

const jobPostings = [
  {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp',
    duration: '2 weeks',
    image: '/placeholder.svg?height=100&width=100',
    details: 'Exciting opportunity for an experienced React developer...',
    price: 0.5,
    rating: 4.9,
    reviews: 2431
  },
  {
    id: 2,
    title: 'Blockchain Engineer',
    company: 'CryptoInc',
    duration: '1 month',
    image: '/placeholder.svg?height=100&width=100',
    details: 'Join our team to build cutting-edge blockchain solutions...',
    price: 0.8,
    rating: 4.8,
    reviews: 1892
  },
  // Add more job postings as needed
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Freelance services marketplace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find the perfect freelance services for your business
            </h1>
            <p className="text-xl text-white mb-8">
              Millions of people use our marketplace to turn their ideas into reality.
            </p>
            <Button size="lg" className="text-lg" onClick={() => document.getElementById('popular-services')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section id="popular-services" className="py-16">
        <h2 className="text-3xl font-bold mb-8 container mx-auto px-4">Popular Services</h2>
        <div className="w-full overflow-hidden">
          <PopularServices />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 container mx-auto px-4">Browse Categories</h2>
        <div className="w-full overflow-hidden">
          <CategoryGrid />
        </div>
      </section>
    </div>
  )
}

