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
          content="Carlos Baso - Portafolio; JavaScript, React, Next.js y más. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
