import "@/styles/globals.css";
import "@fontsource-variable/inter";
import { Toaster } from "@/components/ui/sonner";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "Inter Variable, sans-serif" }}>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
