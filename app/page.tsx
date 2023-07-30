import Link from 'next/link'

export const metadata = {
  title: 'Bảo học chữ cái tiếng Việt',
  description:
    'An Web-app to help Bảo to learn Vietnamese characters.',
  metadataBase: new URL('https://hoc.cao.id.vn'),
}

export default function Home() {
  return (
    <main className="grid items-center justify-between h-full gap-6 p-24 px-3 place-content-center lg:px-8">
      <div className="grid grid-cols-2 gap-3 mx-auto md:gap-6">
        <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
          <Link href="/alphabets" className="text-lg font-bold uppercase md:text-2xl lg:text-4xl">Alphabets</Link>
        </div>
        <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
          <Link href="/vowels" className="text-lg font-bold uppercase md:text-2xl lg:text-4xl">Vowels</Link>
        </div>
        <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
          <Link href="/consonants" className="text-lg font-bold uppercase md:text-2xl lg:text-4xl">Consonants</Link>
        </div>
        <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
          <Link href="/random" className="text-lg font-bold uppercase md:text-2xl lg:text-4xl">Random</Link>
        </div>
      </div>
    </main>
  )
}
