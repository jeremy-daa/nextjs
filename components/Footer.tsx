import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex items-start gap-10 py-10 md:flex-row flex-col md:items-center ">
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex justify-start gap-3 items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src={"/frog.jpg"} fill alt="" />
          </div>
          <h1 className="text-lg font-semibold">Lambda Blog</h1>
        </div>
        <div className="text-sm tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque
          numquam, doloribus provident laborum, aspernatur earum autem fugit
          similique placeat aut.
        </div>
        <div className="flex flex-1 justify-start gap-3 items-center">
          <Image
            src={"/facebook.png"}
            alt="facebook logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          <Image
            src={"/tiktok.png"}
            alt="tiktok logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          <Image
            src={"/youtube.png"}
            alt="youtube logo"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex-1 flex gap-[30px] md:gap-[50px] lg:gap-[80px] justify-end items-center">
        <div className="flex flex-col justify-start gap-2 text-sm">
          <h1 className="font-bold">Links</h1>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col justify-start gap-2 text-sm">
          <h1 className="font-bold">Tags</h1>
          <Link href="/">Style</Link>
          <Link href="/blog">Fashion</Link>
          <Link href="/about">Coding</Link>
          <Link href="/contact">Travel</Link>
        </div>
        <div className="flex flex-col justify-start gap-2 text-sm">
          <h1 className="font-bold">Social</h1>
          <Link href="/">Facebook</Link>
          <Link href="/blog">Instagram</Link>
          <Link href="/about">Tiktok</Link>
          <Link href="/contact">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
