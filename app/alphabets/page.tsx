import { ALPHABETS } from '../../data'
import Link from 'next/link'

export default function Alphabets() {
  return (
    <main className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {
        ALPHABETS.map((letter, index) => (
          <Link key={letter.char} href={`/char/${letter.char}`} >
            <div className="grid p-6 transition-all border-4 border-black cursor-pointer aspect-square hover:border-orange-800 rounded-2xl hover:bg-orange-300 bg-slate-300">
              <div className="text-[8rem] leading-none font-bold text-blue-900 w-full text-center">
                {letter.char.toUpperCase()}
              </div>
              <div className="flex items-end">
                <div className="text-2xl font-semibold text-orange-900 md:text-3xl lg:text-4xl">{letter.char}</div>
                <div className="ml-auto text-xl">{letter.reading}</div>
              </div>
            </div>
          </Link>
        ))
      }
    </main>
  )
}
