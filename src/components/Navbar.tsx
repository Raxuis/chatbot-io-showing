import Image from "next/image";

export function Navbar() {
  return (
    <div className="flex justify-between">
      <Image src='/logo.svg' alt="logo" width={40} height={40} />
      <p className="text-gray-300 text-xl duration-200 hover:translate-x-3">ChatBot IO</p>
    </div>
  )
}
