import Link from 'next/link'

export const metadata = {
  title: 'Bảo học chữ cái tiếng Việt',
  description:
    'An Web-app to help Bảo to learn Vietnamese characters.',
  metadataBase: new URL('https://hoc.cao.id.vn'),
}

export default function Home() {
  return (
    <main className="grid gap-6 px-3 place-content-center lg:px-8">
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <Link prefetch href="/alphabets" className="text-base font-bold uppercase sm:text-lg md:text-2xl lg:text-4xl">
          <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
            Alphabets
          </div>
        </Link>
        <Link prefetch href="/vowels" className="text-base font-bold uppercase sm:text-lg md:text-2xl lg:text-4xl">
          <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
            Vowels
          </div>
        </Link>
        <Link prefetch href="/consonants" className="text-base font-bold uppercase sm:text-lg md:text-2xl lg:text-4xl">
          <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
            Consonants
          </div>
        </Link>
        <Link prefetch href="/random" className="text-base font-bold uppercase sm:text-lg md:text-2xl lg:text-4xl">
          <div className="grid p-6 transition-all bg-white border-2 rounded-lg cursor-pointer md:border-4 place-content-center aspect-square hover:bg-indigo-100 hover:border-indigo-400">
            Random
          </div>
        </Link>
      </div>
    </main>
  )
}
