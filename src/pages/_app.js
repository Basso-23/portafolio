import "@/styles/globals.css";
import "@fontsource-variable/inter";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div className="inter">
      <Head>
        <title>Mis proyectos</title>
        <meta
          name="description"
          content="Carlos Baso - Portafolio; JavaScript, React JS, Next JS y más. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
