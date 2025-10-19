"use client";

import { useCurrentAccount } from "@mysten/dapp-kit";
import React, { useEffect } from "react";

export default function Teste() {
  const currentAccount = useCurrentAccount();

  useEffect(() => {
    console.log("Current Account:", currentAccount);
  }, [currentAccount]);
  return <div>teste</div>;
}
