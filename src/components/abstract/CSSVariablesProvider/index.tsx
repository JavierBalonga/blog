"use client";

import React, { useEffect } from "react";

export const CSSVariablesProvider = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.setProperty(
        "--window-scroll-y",
        `${window.scrollY || 0}`
      );
    };
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      document.body.style.setProperty(
        "--body-scroll-height",
        `${document.body.scrollHeight || 0}`
      );

      document.body.style.setProperty(
        "--window-inner-height",
        `${window.innerHeight || 0}`
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <></>;
};
