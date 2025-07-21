import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-auto text-center mx-auto">
      <h3>
        Copyright © 2025 <a href="https://instagram.com/ezgrxs" rel="noopenner noreferrer">Eriza Zehezkiel Gracia</a>
        <br />
        <Link href="/">Main</Link> | <Link href="/about">About</Link> | <Link href="/link">Link</Link> | <Link href="/Gallery">Gallery</Link><br/>
        Mail me at: <a href="mailto:erz@erizazg.my.id">erz@erizazg.my.id</a><br/>
      </h3>
    </footer>
  );
}

export default Footer;