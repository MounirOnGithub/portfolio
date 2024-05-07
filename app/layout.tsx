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
      <div className="bg-[#fff7f2]">
        <Navbar />
        <div>
            {children}
        </div>
      </div>
    </div>
  )
}
