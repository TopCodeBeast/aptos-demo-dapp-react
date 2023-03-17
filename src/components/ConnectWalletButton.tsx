import { useState } from "react";
import walletImg from "../imgs/wallet.svg";

import { useWallet } from "@manahippo/aptos-wallet-adapter";
import ConnectWalletModal from "./ConnectWalletModal";

const ConnectWalletButton = (props: any) => {
  const { connectButton, disabled } = props;

  const wallet = useWallet();
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    if (connectButton) {
      setShowModal(true);
      return;
    }
    wallet.disconnect();
  }

  const button = (
    <button
      disabled={disabled}
      className="wallet-btn"
      onClick={handleButtonClick}
    >
      <img src={walletImg} alt="wallet" width="20px" />
      <h4 className="mb-0">{connectButton ? "Connect Wallet" : "Disconnect"}</h4>
    </button>
  );

  return (
    <>
      {connectButton ? (
        button
      ) : wallet.account?.address?.toString() !== undefined ? (
        <>{button}</>
      ) : null}

      <ConnectWalletModal
        show={showModal}
        onConnect={() => setShowModal(false)}
      />
    </>
  );
};

export default ConnectWalletButton;
