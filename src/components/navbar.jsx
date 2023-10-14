import Image from 'next/image'
import Logo from '../assets/logo.png';

function Navbar ()
{
    return (
      <div>
         <header >
        <nav className='flex items-center justify-between h-14 pl-20 '>
            <div className='flex items-center'>
                <Image className=' h-5 w-16' src={Logo} />
            </div>
            <ul className='flex items-center justify-center gap-2'>
                <li className='grid items-center'>
                    New & Feature
                </li>
                <li className='grid items-center'>
                    Man
                </li>
                <li className='grid items-center'>
                    Women
                </li>
                <li className='grid items-center'>
                    Kids
                </li>
                <li className='grid items-center'>
                    Accessories
                </li>
                <li className='grid items-center'>
                    Sales
                </li>
            </ul>
            <ul className='flex items-center justify-center gap-2'>
                <li className='grid items-center'>
                    <input className=' bg-[#f5f5f5] border-none' />
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
