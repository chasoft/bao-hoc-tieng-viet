import HomeGrid from '@/components/HomeGrid';

export const metadata = {
  title: 'Bảo học chữ cái tiếng Việt',
  description:
    'An Web-app to help Bảo to learn Vietnamese characters.',
  metadataBase: new URL('https://sáng.vn'),
}

export default function Home() {
  return (
    <main className="grid place-content-center">
      <HomeGrid />
    </main>
  )
}
