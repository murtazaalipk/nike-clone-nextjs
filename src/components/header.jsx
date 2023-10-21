import Navbar from "./navbar"
import Head1 from "../assets/head1.png"
import Head2 from "../assets/head2.png"
import Image from 'next/image'
import Bag from "../assets/bag.png"
import Heart from "../assets/heart.png"
import Link from "next/link"
import Logo from '../assets/logo.png';

export default function Header() {
  return (
      <main>        
      <div className=" font-sans items-center flex justify-between h-12 pl-16 pr-16 bg-[#f5f5f5]  md:hidden ">
            <ul className='flex items-center justify-center gap-6'>
                <li >
                <Link href={"./"} >  <Image className="h-8 w-8" src={Head1} /> </Link>
                </li>
                <li >
                <Link href={"./"} >  <Image className="" src={Head2} /> </Link>
                </li>
 
            </ul>
            <ul className='flex items-center justify-center gap-4'>
                <li className='font-semibold '>
                <Link href={"./"} >   Find a Store &nbsp; | </Link>
                </li>
                <li className=' font-semibold'>
                <Link href={"./"} >    Help &nbsp; | </Link>
                </li>
                <li className=' font-semibold'>
                <Link href={"./"} >   Join Us &nbsp; | </Link>
                </li>
                <li className=' font-semibold'>
                <Link href={"./"} >   Sign In  </Link>
                </li>
 
            </ul>
        </div>
        <Navbar/>
        <div className=" bg-[#f5f5f5] h-20 w-full">
        .
        </div>

      </main>
  )
}
