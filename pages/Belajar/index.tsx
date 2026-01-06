import Head from "next/head";
import FooterBelajar from "../../Components/Other/Footer-belajar";
import Belajar from "../../Components/Page/Belajar";

export default function link() {
  return (
    <div>
      <Head>
        {/* Web Property */}
        <title>Belajar</title>
      </Head>
      <Belajar />
      <FooterBelajar />
    </div>
  );
}
