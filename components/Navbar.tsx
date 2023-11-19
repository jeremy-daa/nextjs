import Image from "next/image";
import Link from "next/link";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="py-3 flex justify-between items-center duration-300">
      <div className="hidden flex-1 justify-start gap-3 items-center lg:flex">
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
      <Link
        href={"/"}
        className="md:text-2xl text-xl font-bold flex-1 lg:text-center text-left"
      >
        Lambda Blog
      </Link>
      <div className="text-base flex justify-end gap-3 flex-1 items-center ">
        <ThemeToggle />
        <Link href={"/"} className="md:block hidden">
          Homepage
        </Link>
        <Link href={"/blog"} className="md:block hidden">
          Blog
        </Link>
        <Link href={"/"} className="md:block hidden">
          About
        </Link>
        <AuthLinks />
      </div>
    </nav>
  );
};

export default Navbar;
