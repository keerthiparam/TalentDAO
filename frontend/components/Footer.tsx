import Link from 'next/link'

const footerLinks = {
  'Categories': [
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech'
  ],
  'About': [
    'Careers',
    'Press & News',
    'Partnerships',
    'Privacy Policy',
    'Terms of Service'
  ],
  'Support': [
    'Help & Support',
    'Trust & Safety',
    'Selling on Freelance',
    'Buying on Freelance'
  ],
  'Community': [
    'Events',
    'Blog',
    'Forum',
    'Community Standards',
    'Podcast'
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Freelance. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

