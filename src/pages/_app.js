import "@/styles/globals.css";
import "@fontsource-variable/dm-sans";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "DM Sans Variable, sans-serif" }}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
