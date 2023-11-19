import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="text-center place-items-center overflow-hidden">
        Copyright © 2023 <a href="https://instagram.com/ezgrxs" rel="noopenner noreferrer">Eriza Zehezkiel Gracia</a>
        <br />
        <Link href={"/about"}>About</Link> | <Link href={"/link"}>Link</Link> | <Link href={"/Gallery"}>Gallery</Link><br/>
        Mail me at: <a href="mailto:erz@erizazg.my.id" className='text-center place-items-center'>erz@erizazg.my.id</a>
      </div>
    </div>
  );
}

export default Footer;