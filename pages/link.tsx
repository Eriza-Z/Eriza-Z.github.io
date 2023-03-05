import Image from "next/image";
import style from "../styles/Home.module.scss";

export default function link() {
  return (
    <div>
      <div className={style.content}>
        <div className="top-picture">
          <Image
            src="/Pelawan.jpg"
            alt="Pantai Pelawan"
            width={578}
            height={260.5}
          />
        </div>
        <h1 className={style.irenk}>Eriza Zehezkiel Gracia</h1>
        <h2>Social Media</h2>
        <div className={style.button_area}>
          <a
            href="https://www.instagram.com/erizazg/"
            className={style.a}
            target={"_blank"}
            rel="noopenner noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://discord.com/invite/gWQzz52djZ"
            className={style.a}
            target={"_blank"}
            rel="noopenner noreferrer"
          >
            Discord
          </a>
        </div>
        <h2>Game Account</h2>
        <div className={style.button_area}>
          <a
            href="https://steamcommunity.com/id/AZvP"
            className={style.a}
            target={"_blank"}
            rel="noopenner noreferrer"
          >
            Steam
          </a>
        </div>
      </div>
    </div>
  );
}
