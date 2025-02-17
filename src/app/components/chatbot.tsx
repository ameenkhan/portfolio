'use client';

import Script from "next/script";

export default function Chatbot() {
  console.log("chatbot loaded");
  return (
    <>
      <Script src="/chatbot.tsx" strategy="lazyOnload"
        onLoad={() => initializeChatbot()} />
    </>
  );
}