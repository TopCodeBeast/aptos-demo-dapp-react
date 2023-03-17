import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { useEffect } from "react";
import ConnectWalletButton from "./ConnectWalletButton";

export default function Header() {
  const wallet = useWallet();

  useEffect(() => {
    if (!wallet.autoConnect && wallet.wallet?.adapter) {
        wallet.connect();
    }
  }, [wallet.autoConnect, wallet.wallet, wallet.connect]);

  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="brand">
            {process.env.REACT_APP_NAME} - Breeding
          </a>
          <ul>
            <li>
              <a className="stake" href="/staking">STAKING</a>
            </li>
            <li>
              <ConnectWalletButton connectButton={!wallet.connected} className="d-flex" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
