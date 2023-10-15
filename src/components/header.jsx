import Navbar from "./navbar"
import Head1 from "../assets/head1.png"
import Head2 from "../assets/head2.png"
import Image from 'next/image'


export default function Header() {
  return (
    <main>
        <div className=" bg-[#f5f5f5] h-9 flex justify-between pl-16 pr-16">
        <ul className='flex items-center justify-center gap-6'>
                <li className='grid items-center'>
                <Image className="h-8 w-8" src={Head1} />
                </li>
                <li className='grid items-center'>
                <Image className="" src={Head2} />
                </li>
 
            </ul>
            <ul className='flex items-center justify-center gap-4'>
                <li className='font-semibold grid items-center'>
                    Find a Store &nbsp; |
                </li>
                <li className=' font-semibold grid items-center'>
                    Help &nbsp; |
                </li>
                <li className=' font-semibold grid items-center'>
                    Join Us &nbsp; |
                </li>
                <li className=' font-semibold  grid items-center'>
                    Sign In 
                </li>
 
            </ul>


        </div>
        <Navbar/>
        <div className=" bg-[#f5f5f5] h-20">
        .
        </div>
    </main>
  )
}
