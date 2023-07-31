import CharList from '@/components/CharList'
import { ALPHABETS } from '../../data'

export default function Alphabets() {
  return (
    <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <CharList list={ALPHABETS} />
    </main>
  )
}
