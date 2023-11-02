import { Roboto_Slab } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/components/organisms/navbar";

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={robotoSlab.className}>
    <Navbar />
      <div>
          {children}
      </div>
    </div>
  )
}
