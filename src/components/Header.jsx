import Link from "next/link"


const Header = () => {
  return (
    <div className="flex items-center justify-around py-6">
        <div>
            <p className="text-2xl font-bold ">AYOMIDE</p>
        </div>
        <nav className="text-sm font-medium flex gap-5">
            <Link href="/collection">Collection</Link>
            <Link href="/about">About Me</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/testimonials">Testimonials</Link>

        </nav>
        <div>
            <button className="bg-black text-white p-3  border rounded-lg text-sm">Book a call</button>
        </div>
      
    </div>
  )
}

export default Header
