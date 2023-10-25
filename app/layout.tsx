import { Roboto_Slab } from 'next/font/google'
import './globals.css'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={robotoSlab.className}>
      <div>
        <div className="container mx-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
