import React from 'react'
import Image from "next/image";
import style from "../../styles/Home.module.scss";

function Link() {
  return (
    <div className='grid place-items-center'>
        <div className="top-picture">
          <Image
            src="https://mergoreb.sirv.com/EZ.png?w=320&h=320&format=webp&q=100"
            alt="Eriza Zehezkiel Gracia"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
        <h1 className='mb-2 pt-4'>Eriza Zehezkiel Gracia</h1>
        <h2 className='my-2'>Social Media</h2>
        <div className={style.button_area}>
          <a
            href="https://www.instagram.com/ezgrxs/"
            className={style.a}
            rel="noopenner noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.github.com/Eriza-Z/"
            className={style.a}
            rel="noopenner noreferrer"
          >
            GitHub
          </a>
        </div>
        <h2 className='mt-2 mb-2.5'>Game</h2>
        <div className={style.button_area}>
          <a
            href="https://steamcommunity.com/id/ErXZ"
            className={style.a}
            rel="noopenner noreferrer"
          >
            Steam
          </a>
        </div>
        <h2 className='mt-2 mb-2.5'>Others</h2>
        <div className={style.button_area}>
          <a
            href="https://link.erizazg.my.id/Musik"
            className={style.a}
            rel="noopenner noreferrer"
          >
            Music Collection
          </a>
        </div>
      </div>
  )
}

export default Link