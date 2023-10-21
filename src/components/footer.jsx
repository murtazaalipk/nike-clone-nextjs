import Link from "next/link";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import Image from "next/image";
import Footdrop from "../assets/footdrop.png";

export default function Footer() {
  return (
    <main >
      <footer className="bg-[#111111] pt-20 pb-6 font-semibold text-white">
       <div className="flex justify-between sm:flex-col pl-16 pr-16">
        <div className="flex justify-between sm:flex-col gap-8 ">
          <div className="flex flex-col gap-4">
            <Link href={"./"}>GIFT CARDS</Link>
            <Link href={"./"}>PROMOTIONS</Link>
            <Link href={"./"}>FIND A STORE</Link>
            <Link href={"./"}>BECOME A MEMBER</Link>
            <Link href={"./"}>NIKE JOURNAL</Link>
            <Link href={"./"}>SEND US FEEDBACK</Link>
          </div>
          <div className="flex flex-col gap-4 text-[#383838] sm:hidden">
            <Link className=" text-slate-50" href={"./"}>
              GET HELP
            </Link>
            <Link href={"./"}>Order Status</Link>
            <Link href={"./"}>Shipping and Delivery</Link>
            <Link href={"./"}>Returns</Link>
            <Link href={"./"}>Order Cancellation</Link>
            <Link href={"./"}>Payment Options</Link>
            <Link href={"./"}>Gift Card Balance</Link>
            <Link href={"./"}>Contact Us</Link>
          </div>
          <div className="flex justify-between text-[#383838] smr:hidden ">
            <div className=" text-slate-50" >
              GET HELP
            </div>
            <Image  className="h-5 w-5" src={Footdrop} />
           
          </div>
          <div className="flex flex-col gap-4 text-[#383838] sm:hidden ">
            <Link className=" text-slate-50" href={"./"}>
              ABOUT NIKE
            </Link>
            <Link href={"./"}>News</Link>
            <Link href={"./"}>Careers</Link>
            <Link href={"./"}>Investors</Link>
            <Link href={"./"}>Purpose</Link>
            <Link href={"./"}>Sustainability</Link>
          </div>
          <div className="flex justify-between  text-[#383838] smr:hidden ">
            <div className=" text-slate-50" href={"./"}>
              ABOUT NIKE
            </div>
            <Image   className="h-5 w-5" src={Footdrop} />
          </div>
         
          </div>
          <div className="flex flex-wrap smr:ml-8 gap-5 max-h-24 sm:pt-10">
            <Link href={"./"}>
              <Image className=" h-8 w-8 hover:bg-white hover:rounded-2xl" src={Twitter} />
            </Link>
            <Link href={"./"}>
              <Image className=" h-8 w-8 hover:bg-white hover:rounded-2xl" src={Facebook} />
            </Link>
            <Link  href={"./"}>
              <Image className=" h-8 w-8  hover:bg-white hover:rounded-2xl" src={Youtube} />
            </Link>
            <Link href={"./"}>
              <Image className=" h-8 w-8 hover:bg-white hover:rounded-2xl" src={Instagram} />
            </Link>
          </div>
        </div>
        <div></div>
        <div></div>
      </footer>
    </main>
  );
}
