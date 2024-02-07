"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ff14d981-b672-4d4e-9d7c-8319215daa92");
  }, []);

  return null;
};