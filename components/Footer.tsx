import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Image
                src="/ssbs-logo.png"
                alt="SSBS Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              SQL Practice Application for students and instructors. 
              Master SQL queries through hands-on practice with real-world business scenarios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="text-gray-300 hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <span className="text-gray-300">For Students</span>
              </li>
              <li>
                <span className="text-gray-300">For Instructors</span>
              </li>
            </ul>
          </div>

          {/* Contact/Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>SQL Practice Platform</li>
              <li>Version 1.0</li>
              <li>© 2024 SSBS. All rights reserved.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>Designed for educational purposes. Practice SQL queries with real-world business scenarios.</p>
        </div>
      </div>
    </footer>
  )
}

