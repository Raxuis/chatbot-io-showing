import { Navbar } from '@/components/Navbar';
import { BentoCustom } from '../components/ui/BentoCustom';
import { InfiniteMovingCardsCustom } from '@/components/ui/infiteCardsCustom';
export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className='w-[80%] mx-auto pt-2'>
        <Navbar />
        <BentoCustom />
        <hr className='my-24 w-[80%] mx-auto text-grey-links' />
        <InfiniteMovingCardsCustom />
      </div>
    </div>
  );
}
