import Link from "next/link"
import homeBg from '../../public/mide1.jpeg'


const Header = () => {
  return (
    <div className="flex items-center justify-around py-6">
        <div>
            <p className="text-2xl font-bold logo">AYOMIDE</p>
        </div>
        <nav className="">
          <ul className="text-sm  font-medium flex gap-8 ">
            <li className="hover:font-semibold transition hover:scale-110"><Link href="/collection" >Collection</Link></li>
            <li className="hover:font-semibold transition duration-700 ease-in-out hover:scale-110"><Link href="/about" >About Me</Link></li>
            <li className="hover:font-semibold transition duration-700 ease-in-out hover:scale-110"><Link href="/contact" >Contact</Link></li>
            <li className="hover:font-semibold transition duration-700 ease-in-out hover:scale-110"><Link href="/testimonials" >Testimonials</Link></li>
          </ul>
            
            
            
            

        </nav>
        <div>
            <button className="bg-black text-white py-3 px-4  border rounded-lg text-sm  transition duration-700 ease-in-out hover:scale-110">Book a call</button>
        </div>
      
    </div>
  )
}

export default Header
