/** @format */

import Image from "next/image";
import Link from "next/link";

export default function AuthLogoHeader() {
  return (
    <div className="flex flex-col items-center mb-6 border-b border-gray-300 pb-6">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Mamamind Logo"
          width={120}
          height={100}
          className="object-contain mb-2"
        />
      </Link>
    </div>
  );
}
