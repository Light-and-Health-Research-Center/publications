import logo from "../public/img/lhrc_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex h-16 border-b border-black-20 p-2">
      <Link href="/">
        <a className="rounded-sm ms-focus-barbiePink ring-offset-4">
          <div className="h-auto w-52">
            <Image
              className="cursor-pointer"
              width={3899}
              height={877}
              src={logo}
              alt="Mount Sinai Health Logo"
              objectFit="contain"
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
