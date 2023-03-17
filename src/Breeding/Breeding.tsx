import { useWallet } from "@manahippo/aptos-wallet-adapter";
import Footer from "../components/Footer";
import Breed from "../components/Breed";
import Header from "../components/Header";
import useWindowHook from "../components/useWindowHook";
import "./Breeding.scss";

function Breeding() {
  const wallet = useWallet();
  const { height, width } = useWindowHook();

  return (
    <section className="home">
      {width > 768 ? (
        <>
          <Header />
          {wallet.connected ? <Breed /> : ""}
          <Footer />
        </>
      ) : (
        <div className="sm-screen">
          <p>
            For a better user experience please access the site on desktop 💉{" "}
          </p>
        </div>
      )}
    </section>
  );
}

export default Breeding;
