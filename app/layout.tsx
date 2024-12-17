import Image from 'next/image'
import { getLocaleOnServer } from '@/i18n/server'
import biLogo from '@/assets/biLogo.png'
import line from '@/assets/line.png'
import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            <div className='w-full h-16 flex bg-gray-1000 items-center'>
              <Image src={biLogo} alt='logo' className='w-24 mx-5' width={384} height={144} />
              <Image src={line} alt='logo' className='h-8' width={2} height={60} />
              <span className='mx-5 logoWord'>100 People Challenge</span>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
