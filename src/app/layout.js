import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LoremBank',
  description: 'LoremBank a mobile banking app is a convenient and secure tool that allows users to manage their finances on the go, directly from their smartphones or tablets.',

}

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
     
      <body className={inter.className}>
          <main>
            {children}
          </main>
      </body>
    </html>
  )
}
