import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google Analytics */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-K0GQVSTT0J"
                ></Script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-K0GQVSTT0J');
                        `,
                    }}
                />
                                    <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.94/build/spline-viewer.js"></script>

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
