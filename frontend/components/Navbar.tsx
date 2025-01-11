'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Menu, X, User, CircleUserRound, MessageSquare, Bell } from 'lucide-react'
import AuthenticatedNavbar from './AuthenticatedNavbar'

const categories = [
  {
    title: 'Digital Marketing',
    items: ['Social Media', 'SEO', 'Content Marketing', 'Email Marketing']
  },
  {
    title: 'Graphics & Design',
    items: ['Logo Design', 'Brand Style Guides', 'Illustration', 'Web Design']
  },
  {
    title: 'Programming',
    items: ['Web Development', 'Mobile Apps', 'Desktop Software', 'Game Development']
  }
]

export default function Navbar() {
  // In a real app, you would get this from your auth context/state
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return isAuthenticated ? <AuthenticatedNavbar /> : (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            TalentDAO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 px-8">
            <div className="w-full max-w-xl">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for services"
                  className="pl-8"
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {categories.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {category.items.map((item) => (
                          <li key={item}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/categories/${item.toLowerCase().replace(' ', '-')}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {item}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/messages">
                    <MessageSquare className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/notifications">
                    <Bell className="h-5 w-5" />
                  </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <CircleUserRound className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsAuthenticated(false)}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild onClick={() => setIsAuthenticated(true)}>
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/join">Join</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Input
              placeholder="Search for services"
              className="mb-4"
            />
            {categories.map((category) => (
              <div key={category.title} className="py-2">
                <h3 className="px-3 text-sm font-medium text-gray-500">{category.title}</h3>
                {category.items.map((item) => (
                  <Link
                    key={item}
                    href={`/categories/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
            {isAuthenticated ? (
              <div className="px-3 py-4 space-y-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/messages">Messages</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/notifications">Notifications</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/profile">Profile</Link>
                </Button>
                {/* <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard">Dashboard</Link>
                </Button> */}
                <Button variant="outline" asChild className="w-full">
                  <Link href="/settings">Settings</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setIsAuthenticated(false)}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="px-3 py-4 space-y-2">
                <Button variant="outline" asChild className="w-full" onClick={() => setIsAuthenticated(true)}>
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/join">Join</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

