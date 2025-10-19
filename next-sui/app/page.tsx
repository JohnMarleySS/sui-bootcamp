"use client";
import { ConnectButton } from "@mysten/dapp-kit";
import { SuiProvider } from "./providers/sui";
import Teste from "./teste";

export default function Home() {
  return (
    <SuiProvider>
      <div>
        <h1>Hello, Sui!</h1>
      </div>
      <ConnectButton />
      <Teste />
    </SuiProvider>
  );
}
