import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div className="inter">
      <Head>
        <title>Carlos Baso</title>
        <meta
          name="description"
          content="Carlos Baso - Portafolio. ¡Echa un vistazo a mis proyectos!"
        />
        <meta itemprop="image" content="https://i.imgur.com/ZDRdAPi.jpeg" />
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
