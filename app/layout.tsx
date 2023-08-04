import './globals.css'
import { inter } from './fonts'
import MainMenuContent from '@/components/MainMenuContent'
import TopMenu from '@/components/TopMenu'
import type { Metadata } from 'next'
import DrawerToggle from './DrawerToggle'


export const metadata: Metadata = {
  title: 'Bảo Bảo học tiếng Việt',
  description: 'Chương trình hỗ trợ Bảo Bảo học tiếng Việt trước khi vào lớp 1.',
}

type RootLayoutProps = {
  children: React.ReactNode
  settings: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({ children, settings, modal }: RootLayoutProps) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <div className="drawer">
          <DrawerToggle />
          <main className="drawer-content">
            {/* Content of the Site goes here */}
            <TopMenu />
            {children}
            {settings}
            {modal}
            {/* Content of the Site end here */}
          </main>
          <div className="z-50 drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <MainMenuContent />
          </div>
        </div>
      </body>
    </html>
  )
}
