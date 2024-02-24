import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex justify-between">
      <Link href={"/"} className="flex">
        <Image src='/logo.svg' alt="logo" width={40} height={40} priority={true} />
        <p className="text-gray-300 text-2xl duration-200 hover:translate-x-3 pt-2 pl-2">ChatBot IO.</p>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href={"/"}><p className="text-gray-300 text-2xl duration-200 hover:translate-x-3">Contact.</p></Link>
      </div>
    </div>
  )
}
