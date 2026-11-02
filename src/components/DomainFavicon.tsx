"use client";

import { useEffect } from "react";

export default function DomainFavicon() {
  useEffect(() => {
    const hostname = window.location.hostname
      .toLowerCase()
      .replace(/^www\./, "");
    const iconPath = hostname === "suntreemyanmar.com"
      ? "/images/logo/suntree-logo.png"
      : "/images/logo/ak-logo2.png";

    const iconLinks = document.querySelectorAll<HTMLLinkElement>(
      'link[rel~="icon"]',
    );

    if (iconLinks.length === 0) {
      const iconLink = document.createElement("link");
      iconLink.rel = "icon";
      iconLink.href = iconPath;
      iconLink.type = "image/png";
      document.head.appendChild(iconLink);
    } else {
      iconLinks.forEach((iconLink) => {
        iconLink.href = iconPath;
        iconLink.type = "image/png";
      });
    }

    document.querySelectorAll<HTMLLinkElement>(
      'link[rel="apple-touch-icon"]',
    ).forEach((iconLink) => {
      iconLink.href = iconPath;
      iconLink.type = "image/png";
    });
  }, []);

  return null;
}
