import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="text-white tengah">
        Copyright © 2023 <a href="https://instagram.com/ezgrxs" rel="noopenner noreferrer">Eriza Zehezkiel Gracia</a>
        <br />
        <Link href={"/about"}>About</Link> | <Link href={"/link"}>Link</Link> | <Link href={"/Gallery"}>Gallery</Link> | <Link href={"/technology"}>Technology</Link><br/>
        Mail me at: <a href="mailto:erz@erizazg.my.id">erz@erizazg.my.id</a>
      </div>
    </div>
  );
}

export default Footer;
