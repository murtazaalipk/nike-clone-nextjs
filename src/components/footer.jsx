import Link from "next/link";

export default function Footer() {
  return (
    <main>
      <footer className="bg-[#111111] pt-20 pb-6 font-semibold text-white" >
        <div className="flex justify-between pl-16 pr-16">
          <div className="flex flex-col gap-4">
            <Link href={"./"} >GIFT CARDS</Link>
            <Link href={"./"}>PROMOTIONS</Link>
            <Link href={"./"}>FIND A STORE</Link>
            <Link href={"./"}>BECOME A MEMBER</Link>
            <Link href={"./"}>NIKE JOURNAL</Link>
            <Link href={"./"}>SEND US FEEDBACK</Link>
          </div>
          <div className="flex flex-col gap-4 text-[#383838]">
          <Link className=" text-slate-50" href={"./"} >GET HELP</Link>
            <Link href={"./"}>Order Status</Link>
            <Link href={"./"}>Shipping and Delivery</Link>
            <Link href={"./"}>Returns</Link>
            <Link href={"./"}>Order Cancellation</Link>
            <Link href={"./"}>Payment Options</Link>
            <Link href={"./"}>Gift Card Balance</Link>
            <Link href={"./"}>Contact Us</Link> 
          </div>
          <div className="flex flex-col gap-4 text-[#383838]" >
          <Link className=" text-slate-50" href={"./"} >ABOUT NIKE</Link>
            <Link href={"./"}>News</Link>
            <Link href={"./"}>Careers</Link>
            <Link href={"./"}>Investors</Link>
            <Link href={"./"}>Purpose</Link>
            <Link href={"./"}>Sustainability</Link>
          </div>
          <div>
          
          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </footer>
    </main>
  );
}
