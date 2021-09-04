import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>
            Light and Health Publications | Light and Health Research Center
          </title>

          <meta
            name="description"
            content="Search publications written by researchers at the Light and Health Research Center."
            key="head-description"
          />
          <meta
            property="og:title"
            content="Light and Health Publications | Light and Health Research Center"
            key="head-ogtitle"
          />
          <meta
            property="og:description"
            content="Search publications written by researchers at the Light and Health Research Center."
            key="head-ogdescription"
          />
          <meta
            property="og:image"
            content="https://publications.light-health.org/img/undraw/publication.jpg"
            key="head-ogimage"
          ></meta>
          <meta
            property="og:url"
            content="https://publications.light-health.org"
            key="head-ogurl"
          ></meta>
          <meta
            name="twitter:card"
            content="summary_large_image"
            key="head-twittercard"
          ></meta>
          <meta
            name="twitter:image:alt"
            content="Man looking at publication"
            key="head-twitterimgalt"
          ></meta>
          <meta
            property="og:site_name"
            content="Light and Health Publications"
            key="head-ogsite_name"
          ></meta>
          {/* Open Sans */}
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />

          {/* Inter Var */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>

          {/* IM Fell French Canon SC */}
          <link
            href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon+SC&display=swap"
            rel="stylesheet"
          ></link>

          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#01aeef" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="font-inter">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
