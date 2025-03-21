import Link from "next/link";
import React from "react";

function FooterBelajar() {
  return (
    <div className="my-3 py-1.5">
      <div className="text-center place-items-center overflow-hidden m-auto">
        Credit: <a href="https://x.com/al_studytwt" rel="noopenner noreferrer">Al Study Tweet</a>
        <br />
        Made By: <Link href="https://instagram.com/ezgrxs">Eriza</Link>
      </div>
    </div>
  );
}

export default FooterBelajar;