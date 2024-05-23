import "@/styles/globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/roboto";
import "@fontsource-variable/montserrat";
// Supports weights 300-700
import "@fontsource-variable/space-grotesk";

// Supports weights 300-900
import "@fontsource-variable/rubik";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "Inter Variable, sans-serif" }}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
