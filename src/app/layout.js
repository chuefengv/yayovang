import './globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Info from '@/components/Info/Info'

export const metadata = {
  title: 'Yayo Vang',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className='layout'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
