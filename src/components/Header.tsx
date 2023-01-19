import Link from "next/link";
import { BellIcon } from "@heroicons/react/24/outline";
import { AiOutlineFire } from "react-icons/ai";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import leetcode from "@/assets/leetcode.png";

export default function Header() {
  const navLinks = [
    "Explore",
    "Problems",
    "Contest",
    "Discuss",
    "Interview",
    "Store",
  ];
  return (
    <>
      <nav className="bg-white shadow-md text-gray-600 h-12 px-4 flex items-center justify-between">
        <section className="flex items-center gap-4">
          <Image
            className="h-6 w-5"
            height={30}
            width={30}
            alt="logo"
            src={leetcode}
          />
          {navLinks.map((label, index) => {
            return <NavLink label={label} key={index} />;
          })}
        </section>
        <section className="flex items-center text-gray-500 gap-6">
          <BellIcon className="h-5 w-5" />
          <AiOutlineFire className="h-5 w-5" />
          <Image
            className="h-7 w-7 rounded-full"
            height={30}
            width={30}
            alt="logo"
            src={avatar}
          />
        </section>
      </nav>
    </>
  );
}
interface INavLinkProps {
  label: string;
}
function NavLink({ label }: INavLinkProps) {
  return <Link href={"/"}>{label}</Link>;
}
