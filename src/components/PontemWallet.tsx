import {
  WalletProvider,
  AptosWalletAdapter,
  MartianWalletAdapter,
  RiseWalletAdapter,
} from "@manahippo/aptos-wallet-adapter";

import React from "react";

interface WalletProviderProps {
  children: React.ReactNode;
}

export default function PontemWallet({ children }: WalletProviderProps) {
  const wallets = [
    new RiseWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
  ];
  return (
    <WalletProvider
      wallets={wallets}
      autoConnect={false}
      onError={(error) => {
        console.log("Handle Error Message", error);
      }}
    >
      {children}
    </WalletProvider>
  );
}
