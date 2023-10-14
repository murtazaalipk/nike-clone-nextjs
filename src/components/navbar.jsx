import Image from 'next/image'
import Logo from '../assets/logo.png';

function Navbar ()
{
    return (
      <div>
         <header >
        <nav className=' font-sans flex items-center justify-between h-14 pl-20 '>
            <div className='flex items-center'>
                <Image className='  h-5 w-16' src={Logo} />
            </div>
            <ul className='flex items-center justify-center gap-6'>
                <li className='font-semibold grid items-center'>
                    New & Feature
                </li>
                <li className=' font-semibold grid items-center'>
                    Man
                </li>
                <li className='grid items-center font-semibold'>
                    Women
                </li>
                <li className='grid items-center font-semibold'>
                    Kids
                </li>
                <li className='grid items-center font-semibold'>
                    Accessories
                </li>
                <li className='grid items-center font-semibold'>
                    Sales
                </li>
            </ul>
            <ul className='flex items-center justify-center gap-6'>
                <li className='grid items-center'>
                    <input className=' bg-[#f5f5f5] border-none rounded-2xl h-8' />
                </li>
                <li className='grid items-center'>
               
                </li>
                <li className='grid items-center'>
                   
                </li>
            </ul>
            
        </nav>
      </header>
        
      </div>
    )
  
}

export default Navbar
