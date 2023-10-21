import Image from 'next/image'
import Logo from '../assets/logo.png';
import Link from 'next/link';
import Bag from "../assets/bag.png"
import Heart from "../assets/heart.png"
import Search from "../assets/search.png"
import Menu from "../assets/menu.png"

function Navbar ()
{
    return (
      <div  >
         <header >
        <nav className=' font-sans flex items-center justify-between h-20 pl-16 pr-16  '>
            <div className='flex items-center'>
            <Link href={"./"} > <Image className=' h-6 w-20'   src={Logo} /> </Link>
            </div>
            <ul className='flex items-center justify-center gap-6 md:hidden'>
                <li className='font-semibold '>
                   <Link href={"./"} > New & Feature </Link>
                </li>
                <li className=' font-semibold '>
                   <Link href={"./"} > Man </Link>
                </li>
                <li className='  font-semibold'>
                  <Link href={"./"} > Women </Link>
                </li>
                <li className=' font-semibold'>
                 <Link href={"./"} > Kids </Link>
                </li>
                <li className=' font-semibold'>
                <Link href={"./"} >  Accessories </Link>
                </li>
                <li className=' font-semibold'>
                <Link href={"./"} > Sales </Link>
                </li>
            </ul>
            <ul className='flex items-center justify-center gap-6'>
                <li className='flex items-center'>
                    <i className='mdr:absolute pl-4' ><Image className=' h-7 w-7' src={Search}></Image></i><input  placeholder='          Search' className=' bg-[#f5f5f5] border-none rounded-full h-12 placeholder:font-semibold md:hidden' />
                </li>
                <li >
                    <Link href={"./"} ><Image src={Heart} /></Link>
                </li>
                <li >
                    <Link href={"./"} ><Image src={Bag} /></Link>
                </li>
                <li className=' mdr:hidden '>
                    <div href={"./"}   ><Image src={Menu} /></div>
                </li>
            </ul>
            
        </nav>
      </header>
        
      </div>
    )
  
}

export default Navbar
