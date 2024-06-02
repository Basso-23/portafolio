import "@/styles/globals.css";
import "@fontsource-variable/inter";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "Inter Variable, sans-serif" }}>
      <Head>
        <title>Carlos Baso</title>
        <meta
          name="description"
          content="Portafolio - Carlos Baso Ing. de Software; JavaScript, React JS, Next JS y más. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
