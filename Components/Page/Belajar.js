import React from 'react'
import style from "../../styles/Home.module.scss";

function Belajar() {
  return (
    <div className='grid place-items-center'>
        <h2 className='mt-2 mb-2.5'>Others</h2>
        <div className={style.button_area}>
          <a
            href="https://drive.google.com/drive/folders/1rYY_M0XxqijFuSNoGeY7o8rTrf1PdD3q?usp=sharing"
            className={style.a}
            rel="noopenner noreferrer"
          >
            Belajar UTBK 2025
          </a>
        </div>
      </div>
  )
}

export default Belajar