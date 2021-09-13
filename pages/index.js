import Footer from "../components/Footer";
import PublicationFooter from "../components/footer/PublicationFooter";
import Header from "../components/Header";
import Main from "../components/Main";
import {
  PublicationsProvider,
  usePublications,
} from "../components/publicationsContext";
import Search from "../components/Search";
import Selectors from "../components/Selectors";
import TopBar from "../components/TopBar";
import Head from "next/head";
import { getPublications, getSelectors } from "../lib/pubs";

export default function Home({ publications, selectors }) {
  const context = usePublications();
  return (
    <>
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
      </Head>
      <PublicationsProvider publications={publications} selectors={selectors}>
        <TopBar />
        <div className="max-w-screen-xl mx-auto mt-4 lg:mt-12 px-4 sm:px-8">
          <Header />
          <Search />
          <Selectors />
          <Main />
          <PublicationFooter />
        </div>
        <Footer />
      </PublicationsProvider>
    </>
  );
}

export async function getStaticProps(context) {
  const publications = getPublications();
  const selectors = getSelectors(publications);
  return {
    props: { publications, selectors },
  };
}
