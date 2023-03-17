import "./Staking.scss";
import stdImg from "../imgs/archlabs.png";
import useWindowHook from "../components/useWindowHook";
import Footer from "../components/Footer";
import { useState } from "react";
import Header from "../components/Header_v2";
import StakingDetails from "../components/StakingDetails";
import UnStakedNFTS from "../components/UnStakedNFTS";
import StakedNFTS from "../components/StakedNFTS";

export default function Staking() {
  const { height, width } = useWindowHook();

  const [walletNft, setWalletNft] = useState<{ image: string; name: string }[]>(
    [
      { image: stdImg, name: "UnStake" },
      { image: stdImg, name: "UnStake" },
      { image: stdImg, name: "UnStake" },
      { image: stdImg, name: "UnStake" },
    ]
  );

  const [stakedNft, setStakedNft] = useState<{ image: string; name: string }[]>(
    [
      { image: stdImg, name: "Stake" },
      { image: stdImg, name: "Stake" },
      { image: stdImg, name: "Stake" },
      { image: stdImg, name: "Stake" },
    ]
  );

  return (
    <section className="staking">
      {width > 1024 ? (
        <>
          <Header />
          <StakingDetails />
          <div className="container">
            <div className="stakeBoxs">
              <UnStakedNFTS item={walletNft} />

              <div className="border"></div>

              <StakedNFTS item={stakedNft} />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <div className="sm-screen">
            <p>
              For a better user experience please access the site on desktop 💉{" "}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
