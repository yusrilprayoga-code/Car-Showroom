import type { Metadata } from 'next';
import './globals.css'
import Footer from './../components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Car Showroom',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider>
    <html lang="en">
      <body className="relative">
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
