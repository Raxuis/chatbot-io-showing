import { Navbar } from '@/components/Navbar';
import { BentoCustom } from '../components/ui/BentoCustom';
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a]">
      <div className='w-[80%] mx-auto pt-2'>
        <Navbar />
        <BentoCustom />
      </div>
    </div>
  );
}
