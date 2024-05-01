import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CompanyLogoInterface extends Image.propTypes {
  alt: string;
  target: string;
  image: React.ReactNode;
  customClasses?: string;
}

function CompanyLogo({
  alt,
  image,
  target,
  customClasses,
  ...rest
}: CompanyLogoInterface) {
  return (
    <Link href={target}>
      <Image
        className={`rounded-l scale-[65%] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:scale-[80%] transition-all duration-200 ${customClasses}`}
        src={`/${image}.svg`}
        alt={alt}
        width={200}
        height={200}
        {...rest}
      />
    </Link>
  );
}

export default CompanyLogo;
