import Script from "next/script";
import BLOG from "~/blog.config";
import CJK from "~/lib/cjk";

export const Scripts: React.VFC = () => (
  <>
    <script defer src="https://eu.umami.is/script.js" data-website-id="232655fa-f677-4160-bdb6-2597c177c1ea"></script>
  <Script>
{`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '59949');`}
</Script>

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
