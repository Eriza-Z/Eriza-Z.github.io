import Image from "next/image";
import Head from "next/head";
import style from "../../styles/Home.module.scss";
import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      alert("To see this page content, please use Landscape mode, if the content didn't show up, please refresh the page after changing your phone orientation to Landscape.");
    }
  }, []);

  return (
    <div>
      <Head>
        {/* Web Property */}
        <title>Eriza Zehezkiel Gracia - Gallery</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta
          name="keywords"
          content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs"
        />
        <meta
          name="description"
          content="Eriza Zehezkiel Gracia Gallery Page"
        />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="ErZ" />
        <meta property="og:title" content="ErZ" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Eriza Zehezkiel Gracia Gallery Page."
        />
        <meta property="og:url" content="https://erizazg.my.id/Gallery" />
        <meta
          property="og:image"
          content="http://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Foto lorong kelas" />
        <meta name="theme-color" content="#080452" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@eriza_gracia" />
        <meta name="twitter:creator" content="@eriza_gracia" />
        <meta name="twitter:url" content="https://erizazg.my.id/Gallery" />
        <meta name="twitter:title" content="ErZ" />
        <meta
          name="twitter:description"
          content="Eriza Zehezkiel Gracia Gallery Page"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id/Gallery" />
      </Head>
      <div className={style.gallery}>
        <div className={style.gallery__column} data-aos="flip-left">
          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8BgiZe9lcU5yND_zWvXkxPIACwWS94fcfxww6MkyhR2AmwHWGQZcJ0-b-acDRwRC4Hq-mF6sxz-bS6-57obOu9ZtQpymanGS2EiTBjpvDADHEZsIdcuBswLNgmpouNXhvV-N8gIilQUJwqyMH0lrU-v=w1470-h829-no?authuser=0"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8BgiZe9lcU5yND_zWvXkxPIACwWS94fcfxww6MkyhR2AmwHWGQZcJ0-b-acDRwRC4Hq-mF6sxz-bS6-57obOu9ZtQpymanGS2EiTBjpvDADHEZsIdcuBswLNgmpouNXhvV-N8gIilQUJwqyMH0lrU-v=w1470-h829-no?authuser=0"
                alt={"School Roof"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                School Roof
              </figcaption>
            </figure>
          </a>

          <a
            href="https://www.instagram.com/p/Co3pqg4SCHK/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8D1Wgylp4QhBE8opdEi-EUjPnR4pEpoAc-q0XoMFvF7wb78iyVBXc7D2XSY5zxw8aXq1jzdaS7z3jDZe9e6ICY24ReCbp5Mllyq5gDYzriXTc2mbD2EoNkV7oIkC-1wckhQlVnAwHdiqhdlufEUEVog=w1766-h995-s-no"
                alt={"Sawah"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Sawah
              </figcaption>
            </figure>
          </a>

          <a
            href="https://www.instagram.com/p/Co3pqg4SCHK/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8D3XmSIOs2oDV5ev0TTp_s1jqNly4-Cl1-KuLI_UhtaZBXJ2tqKAywu5j-Qa4L8TFSUb4i4mH8dOv_KejZGqZrtXfxmCG2XrH41vsk-qnYJu3r8VuHTNjG8Y3DBe_1UHtVNBu-FRxLVDVsf4TFZtwX5=w1766-h995-s-no"
                alt={"Sawah"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Sawah
              </figcaption>
            </figure>
          </a>
        </div>
        <div className={style.gallery__column} data-aos="flip-right">
          <a
            href="https://www.instagram.com/p/Co3pqg4SCHK/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8CxuhrN-ZkIoZpquJzIMkPPWDS3uBUT6N6VfGdA4_tIjhdCzsdtB2lUp5FUn78Hw3bx-QUGOpp0KYVyWzLSUQT6_mbbrb-UhZABMz-RKKurfh2U6skG4lQh6QY_scj_CCWAmOEfhkgk27Oass-Ny6Hz=w1766-h995-s-no"
                alt={"Toba"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Toba
              </figcaption>
            </figure>
          </a>

          <a
            href="https://www.instagram.com/p/Co3pqg4SCHK/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8AV7K3gWBmNkn94qBS_e1eZ8JKhJClvHwyTeEyaUxQAYd-bDsrmblpdD1nNV-mNwl-h-FW77f6buQ0oj9oMMH9RmE_YA4mVRZt4W6C7BEM6KYEpfMSoZJn3IsNmo8yWa5rQx76xXFyvs1dUhOPWRIr7=w1766-h995-s-no"
                alt={"Toba"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Toba
              </figcaption>
            </figure>
          </a>

          <a
            href="https://www.instagram.com/p/Co3pqg4SCHK/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8B5btGPpigqHUiJU_wqZYJklnRx69q_Ix1HBTljGTorvZCUx1GJVi6mZywh3wyhL5sEF_J4BbCm9UahtiTD7KfzOdc9OjydpHbP06ZtRYRKnFxoBaUY2-6jGGkTrAOxDpV_6vwOQAzcxdOrXBUIc_3K=w1766-h995-s-no"
                alt={"Pantai Pasir Putih"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Pantai Pasir Putih
              </figcaption>
            </figure>
          </a>
        </div>
        <div className={style.gallery__column} data-aos="fade-left">
          <a
            href="https://www.instagram.com/p/CoYYRtxy8Ql/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8Bujhy4REOOUbHcXzJq8eHnunzOxZ8gWgI2arSChY9UAXPG2tw_jEZV0xWR2y66yky3wMJAcfSIDvECIgS8aPZ7tdBLjUiTH198-wK22dLNUfIpBhtCQUZvYe5KyKbFgBcBFt0KXhpH4Jq_KEFISX1G=w1766-h995-s-no"
                alt={"Sentabi"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Pemandian Alam Sentabi
              </figcaption>
            </figure>
          </a>

          <a
            href="https://www.instagram.com/p/CoYYRtxy8Ql/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8B5qI8ABY-73SH8fOJInR9pR4-BuFcwDI6hn95x0Jgx71Wb3fCz-traO2twz1YM7Io-aNRQ_83VG4ycobRM4BNOiaiO-7A0b1rD_CkMtFEPxovXVI-RM7JY2eByW-5sR5hgWsOmwhGXoHHAgJbFd-kD=w1766-h995-s-no"
                alt={"Sentabi"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Pemandian Alam Sentabi
              </figcaption>
            </figure>
          </a>

          <a
            href="https://www.instagram.com/p/CoYYRtxy8Ql/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8D8sYH7J78bWDMW3pcDhgg4n7QVAN8avc8c_YFcrBs4TUSffNA6w-fg0cPNNHc5TMRrAwIFrpJcbQFWp3Oixcg3ig58fXsTgi_BRJv24JUfGPiFOuUStiJ1tYRQquzcLD457iX5xzK6vQXnX8fulMQ5=w1766-h995-s-no"
                alt={"Sentabi"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Pemandian Alam Sentabi
              </figcaption>
            </figure>
          </a>
        </div>
        <div className={style.gallery__column} data-aos="fade-right">
          <a
            href="https://www.instagram.com/p/CoYYRtxy8Ql/"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8B2ZRikBl38OOx9P7n9YAYsGFNLy8mjpNFM2Tk3QW19FlME9sXdb3XsnQviVBOkUHJQxkfw7AYS7Xl5Lpi3W_Ii2doEoiUzbvVhHSMIS4Ez2iWZditpqinU0XthiwEzQoXiiAE-yYcyK8iE_vVyLXXm=w1766-h995-s-no"
                alt={"Sentabi"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Pemandian Alam Sentabi
              </figcaption>
            </figure>
          </a>

          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8C7wWmcs15FDHeAAG5_rFpb8LyfKmMTnG4UB0ppkr76rxanot0mfq2jTwVdFxLKL3kACY-lU1HfhnHtOSwtAPjUe3oX4mDRg6YzdUSjW_MHpnuxzaUC7YBbr9MdbaeJWIbFsAAQqzfGYJQX7AIVmYC-=w1740-h978-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8C7wWmcs15FDHeAAG5_rFpb8LyfKmMTnG4UB0ppkr76rxanot0mfq2jTwVdFxLKL3kACY-lU1HfhnHtOSwtAPjUe3oX4mDRg6YzdUSjW_MHpnuxzaUC7YBbr9MdbaeJWIbFsAAQqzfGYJQX7AIVmYC-=w1740-h978-no"
                alt={"Pajak Pancur Batu"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Pasar Pancur Batu
              </figcaption>
            </figure>
          </a>

          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8CEsdApnVWHfPttz5hXIV9Ysee-nRlYfNV6TpSgCTWEis_MAyzJW9Rong5jSADoz7JqiBXX1a1LQor5C2u0Q58qXl5h2S_330kVWlaXJHrJdqXRsdPhLlVmRokwkcA6vSro1KXaeKWeOfwp7xRX0SQf=w1769-h995-s-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8CEsdApnVWHfPttz5hXIV9Ysee-nRlYfNV6TpSgCTWEis_MAyzJW9Rong5jSADoz7JqiBXX1a1LQor5C2u0Q58qXl5h2S_330kVWlaXJHrJdqXRsdPhLlVmRokwkcA6vSro1KXaeKWeOfwp7xRX0SQf=w1769-h995-s-no"
                alt={"Berastagi"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Berastagi
              </figcaption>
            </figure>
          </a>

          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8DgENbfSrtVO7daMlDjUMAzYQnrxfIa9JN-5_2ttikl5UDeSw2feFNDItATDbYSIAPNSeozdoqsMX-Z9paePD3pGCVPcmzJ7XIxRk7CQrkkSifENU5LBz7WrErQw_ntx6corKUFJe167QDSl7Xu5BFq=w1769-h995-s-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8DgENbfSrtVO7daMlDjUMAzYQnrxfIa9JN-5_2ttikl5UDeSw2feFNDItATDbYSIAPNSeozdoqsMX-Z9paePD3pGCVPcmzJ7XIxRk7CQrkkSifENU5LBz7WrErQw_ntx6corKUFJe167QDSl7Xu5BFq=w1769-h995-s-no"
                alt={"Berastagi"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Berastagi
              </figcaption>
            </figure>
          </a>
        </div>
        <div className={style.gallery__column} data-aos="fade-up">
          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8C1PmSdSF8AJXAdAbsZUWxINdmHlxiivjwMAjukpLFiX3ofdF8UPz0XVmXqRFAoOGJ7etw5IF4kPsnjq2gqyXxOHRAoLm6HBMcXR99kYlRW_Y7BLEyC9OJtOxNzV-Spebnw7-vgMx41hr0bDTiPobSr=w1769-h995-s-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8C1PmSdSF8AJXAdAbsZUWxINdmHlxiivjwMAjukpLFiX3ofdF8UPz0XVmXqRFAoOGJ7etw5IF4kPsnjq2gqyXxOHRAoLm6HBMcXR99kYlRW_Y7BLEyC9OJtOxNzV-Spebnw7-vgMx41hr0bDTiPobSr=w1769-h995-s-no"
                alt={"Berastagi"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Berastagi
              </figcaption>
            </figure>
          </a>

          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8AfTKY4fhZ6d6s_sSkgP-WCLebsyX2C0yRcom37Oz4r8O0AfPfxi7yiR0UXHlgYMPMRlD_-pa15egmZ7dl3JppH7nFZFkv8CxZEQBaNc7SC-VrGUTdsxoBs3ty2Cj1kxO76hx0HIK__5m_n-vwHFzzH=w1769-h995-s-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8AfTKY4fhZ6d6s_sSkgP-WCLebsyX2C0yRcom37Oz4r8O0AfPfxi7yiR0UXHlgYMPMRlD_-pa15egmZ7dl3JppH7nFZFkv8CxZEQBaNc7SC-VrGUTdsxoBs3ty2Cj1kxO76hx0HIK__5m_n-vwHFzzH=w1769-h995-s-no"
                alt={"Danau Toba"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Danau Toba
              </figcaption>
            </figure>
          </a>

          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8CZmamZ6agrrbNVF-edkXg-Tb-c1IB3qCvn2iB42eVyFC84iDrcXvY5hXH2Wou-9B0JXXNojz0QLJXcAROTy_u2kz6WStEfgwaqf9Zmz4jTcnH6SFgdcN2-KerrKC-03CKM_iHIli9GkwiHFCmP0HTJ=w1769-h995-s-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8CZmamZ6agrrbNVF-edkXg-Tb-c1IB3qCvn2iB42eVyFC84iDrcXvY5hXH2Wou-9B0JXXNojz0QLJXcAROTy_u2kz6WStEfgwaqf9Zmz4jTcnH6SFgdcN2-KerrKC-03CKM_iHIli9GkwiHFCmP0HTJ=w1769-h995-s-no"
                alt={"Danau Toba"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Danau Toba
              </figcaption>
            </figure>
          </a>
        </div>
        <div className={style.gallery__column} data-aos="fade-down">
          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8Dv5T0ibI440JJvJ2wKFWZsUbGBr3MvkgkbkcMJgGjKkdK44aE3eGJoauWW1aCht70_fKGBso03T9PYZajWV5Re_PbVp567qJ9smmCQ-KqxlulDIVo-Y5KyqQlTzE5jnlVc7h3I_G6ln4pexMckBNJP=w1769-h995-s-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8Dv5T0ibI440JJvJ2wKFWZsUbGBr3MvkgkbkcMJgGjKkdK44aE3eGJoauWW1aCht70_fKGBso03T9PYZajWV5Re_PbVp567qJ9smmCQ-KqxlulDIVo-Y5KyqQlTzE5jnlVc7h3I_G6ln4pexMckBNJP=w1769-h995-s-no"
                alt={"Danau Toba"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                Danau Toba
              </figcaption>
            </figure>
          </a>

          <a
            href="https://lh3.googleusercontent.com/pw/AMWts8DN2xo5c4F3oCyGUaELbdywlpXPqyDh37VhTAR7zxv-yxmDrpaUCRb8ReJBo_uBkx9GMp0dSdK3XSm231KSIT88Pm1BC64avVHf5aeA8nyrIVpaWi1C0_4qPRVEYFEDRW7ntAnUDPbjiy-SFm_NiV_D=w1769-h995-s-no"
            target="_blank"
            className={style.gallery__link}
          >
            <figure className={style.gallery__thumb}>
              <Image
                src="https://lh3.googleusercontent.com/pw/AMWts8DN2xo5c4F3oCyGUaELbdywlpXPqyDh37VhTAR7zxv-yxmDrpaUCRb8ReJBo_uBkx9GMp0dSdK3XSm231KSIT88Pm1BC64avVHf5aeA8nyrIVpaWi1C0_4qPRVEYFEDRW7ntAnUDPbjiy-SFm_NiV_D=w1769-h995-s-no"
                alt={"SPBU"}
                width={578}
                height={370.5}
                className={style.gallery__image}
              />
              <figcaption className={style.gallery__caption}>
                SPBU
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
      <footer className={"tengah bottom-2"}>
        <p className="putih top-4">
          Hope You All Have A Good Day
          <br />
          {"La Vida No Enjusta, La Vie Est Enjuste"}
        </p>
      </footer>
    </div>
  );
}
