import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-auto text-center mx-auto">
      <h3>
        <br />
        <Link href="/">Main</Link> | <Link href="/Link">Link</Link>
        <br />
        Mail me at: <a href="mailto:erz@erizazg.my.id">erz@erizazg.my.id</a>
        <br />
      </h3>
    </footer>
  );
}

export default Footer;
