import Head from "next/head";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaClipboard } from "react-icons/fa";
import { useForm } from "../Components/form";
import { getRandomChar, getSpecialChar } from "../Components/utility";
import style from "../styles/Home.module.scss";

function App() {
  const [values, setValues] = useForm({
    capital: false,
    small: false,
    number: false,
    symbol: false,
  });
  const [result, setResult] = useState("");

  const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar(),
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let generatedPassword = "";
    const checkedFields = fieldsArray.filter(({ field }) => field);

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length);
      const letter = checkedFields[index]?.getChar();

      if (letter) {
        generatedPassword += letter;
      }
    }
    if (generatedPassword) {
      setResult(generatedPassword);
    } else {
      toast.error(" Please select at least one option");
    }
  };

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);
      toast.success("Copied to your clipboard");
    } else {
      toast.error("There is no password to be copied");
    }
  };

  return (
    <section>
      <Head>
        {/* Web Property */}
        <title>ErZ - Password Generator</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta
          name="keywords"
          content="Eriza Zehezkiel, Eriza Z, Eriza Zehezkiel Gracia, EZGS, ezgs, Password Generator, Password generator"
        />
        <meta
          name="description"
          content="Eriza Zehezkiel Gracia Password Generator"
        />
        <meta name="author" content="Eriza Zehezkiel Gracia" />
        <link rel="icon" href="/favicon.ico" />
        {/* OpenGraph */}
        <meta property="og:site_name" content="ErZ" />
        <meta property="og:title" content="ErZ" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Password Generator Website Page from ErZ." />
        <meta property="og:url" content="https://erizazg.my.id" />
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
        <meta name="twitter:url" content="https://erizazg.my.id" />
        <meta name="twitter:title" content="ErZ" />
        <meta name="twitter:description" content="Password Generator Website Page from ErZ." />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Eriza-Z/Eriza-Z.github.io/master/public/icon.jpg"
        />
        <meta name="twitter:wigets:theme" content="dark" />
        {/* Apple */}
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        {/* Canonical */}
        <link rel="canonical" href="https://erizazg.my.id/password-generator" />
      </Head>
      <div className={style.container}>
        <div className={style.border}>
          <form id="pg-form" onSubmit={handleOnSubmit}>
            <div className="result">
              <input
                type="text"
                id="result"
                placeholder="Insert between 8 - 32768 Character"
                readOnly
                value={result}
              />
              <div className="clipboard" onClick={handleClipboard}>
                <FaClipboard></FaClipboard>
              </div>
            </div>
            <div>
              <div className={style.field}>
                <label htmlFor="length">Length</label>
                <input
                  type="number"
                  id="length"
                  min={8}
                  max={32768}
                  name="length"
                  value={values.length}
                  onChange={setValues}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="capital">Capital</label>
                <input
                  type="checkbox"
                  id="capital"
                  name="capital"
                  checked={values.capital}
                  onChange={setValues}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="small">Small</label>
                <input
                  type="checkbox"
                  id="small"
                  name="small"
                  checked={values.small}
                  onChange={setValues}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="number">Number</label>
                <input
                  type="checkbox"
                  id="number"
                  name="number"
                  checked={values.number}
                  onChange={setValues}
                />
              </div>
              <div className={style.field}>
                <label htmlFor="symbol">Symbol</label>
                <input
                  type="checkbox"
                  id="symbol"
                  name="symbol"
                  checked={values.symbol}
                  onChange={setValues}
                />
              </div>
            </div>
            <button type="submit">Generate Password</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
