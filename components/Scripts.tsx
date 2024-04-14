import Script from "next/script";
import BLOG from "~/blog.config";
import CJK from "~/lib/cjk";

export const Scripts: React.VFC = () => (
  <>
    {BLOG.analytics && BLOG.analytics.provider === "ackee" && (
      <Script
        src={BLOG.analytics.ackeeConfig.tracker}
        data-ackee-server={BLOG.analytics.ackeeConfig.dataAckeeServer}
        data-ackee-domain-id={BLOG.analytics.ackeeConfig.domainId}
      />
    )}
    {BLOG.analytics && BLOG.analytics.provider === "ga" && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.analytics.gaConfig.measurementId}`}
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${BLOG.analytics.gaConfig.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
    <script defer src="https://eu.umami.is/script.js" data-website-id="395526d6-4372-4863-999c-250525e50e52"></script>
    <noscript>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=Noto+${
          BLOG.font === "serif" ? "Serif" : "Sans"
        }+${CJK()}:wght@400;700&display=swap`}
      />
    </noscript>
  </>
);
