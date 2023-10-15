import Image from 'next/image'
import Logo from '../assets/logo.png';
import Link from 'next/link';
import Bag from "../assets/bag.png"
import Heart from "../assets/heart.png"
function Navbar ()
{
    return (
      <div>
         <header >
        <nav className=' font-sans flex items-center justify-between h-16 pl-16 pr-16 '>
            <div className='flex items-center'>
            <Link href={"./"} > <Image className='  h-6 w-20' src={Logo} /> </Link>
            </div>
            <ul className='flex items-center justify-center gap-6'>
                <li className='font-semibold grid items-center'>
                   <Link href={"./"} > New & Feature </Link>
                </li>
                <li className=' font-semibold grid items-center'>
                   <Link href={"./"} > Man </Link>
                </li>
                <li className='grid items-center font-semibold'>
                  <Link href={"./"} > Women </Link>
                </li>
                <li className='grid items-center font-semibold'>
                 <Link href={"./"} > Kids </Link>
                </li>
                <li className='grid items-center font-semibold'>
                <Link href={"./"} >  Accessories </Link>
                </li>
                <li className='grid items-center font-semibold'>
                <Link href={"./"} > Sales </Link>
                </li>
            </ul>
            <ul className='flex items-center justify-center gap-6'>
                <li className='grid items-center'>
                    <input className=' bg-[#f5f5f5] border-none rounded-2xl h-8' />
                </li>
                <li className='grid items-center'>
                    <Link href={"./"} ><Image src={Heart} /></Link>
                </li>
                <li className='grid items-center'>
                    <Link href={"./"} ><Image src={Bag} /></Link>
                </li>
            </ul>
            
        </nav>
      </header>
        
      </div>
    )
  
}

export default Navbar
