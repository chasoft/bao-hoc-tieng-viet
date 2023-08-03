import HomeGrid from "./HomeGrid"

export const metadata = {
  title: 'Bảo Bảo học tiếng Việt',
  description:
    'Tình yêu của ba dành cho Bảo Bảo. Công cụ học tiếng Việt và hơn nữa... dành cho con trai Bảo Bảo',
  metadataBase: new URL('https://sáng.vn'),
}

export default function Home() {
  return (
    <div className="max-w-6xl px-6 py-16 mx-auto sm:py-24 md:py-28 md:px-20">
      <HomeGrid />
    </div>
  )
}
