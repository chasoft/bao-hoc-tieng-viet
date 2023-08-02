import HomeGrid from '@/components/HomeGrid';

export const metadata = {
  title: 'Bảo học chữ cái tiếng Việt',
  description:
    'An Web-app to help Bảo to learn Vietnamese characters.',
  metadataBase: new URL('https://sáng.vn'),
}

export default function Home() {
  return (
    <div className="max-w-6xl px-6 py-16 mx-auto sm:py-24 md:py-28 md:px-20">
      <HomeGrid />
    </div>
  )
}
