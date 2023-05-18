import React from 'react'
import Image from "next/image";
import style from "../../styles/Home.module.scss";

function Link() {
  return (
    <div className={style.content}>
        <div className="top-picture">
          <Image
            src="https://mergoreb.sirv.com/EZ.png?w=320&h=320&format=webp&q=100"
            alt="Eriza Zehezkiel Gracia"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
        <h1>Eriza Zehezkiel Gracia</h1>
        <h2>Social Media</h2>
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
          <a
            href="https://discord.com/invite/8EfZSbg5s6"
            className={style.a}
            target="_blank"
            rel="noopenner noreferrer"
          >
            Kok Bisa Discord Server
          </a>
          <a
            href="https://discord.gg/nmCSQRHr"
            className={style.a}
            target="_blank"
            rel="noopenner noreferrer"
          >
            My Discord Server
          </a>
        </div>
        <h2>Game</h2>
        <div className={style.button_area}>
          <a
            href="https://steamcommunity.com/id/AZvP"
            className={style.a}
            rel="noopenner noreferrer"
          >
            Steam
          </a>
        </div>
      </div>
  )
}

export default Link