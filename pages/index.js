import Head from "next/head";
import CardSection from "../components/CardSection";
import Count from "../components/Count";
import Header from "../components/Header";
import Main from "../components/Main";
import {
  PublicationsProvider,
  usePublications,
} from "../components/publicationsContext";
import Search from "../components/Search";
import Selectors from "../components/Selectors";
import SortBy from "../components/SortBy";
import TopBar from "../components/TopBar";
import VoidMan from "../components/undraw/VoidMan";
import { getPublications, getSelectors } from "../lib/pubs";

export default function Home({ publications, selectors }) {
  const context = usePublications();
  return (
    <PublicationsProvider publications={publications} selectors={selectors}>
      <TopBar />
      <div className="max-w-screen-xl mx-auto mt-4 lg:mt-12 px-4 sm:px-8">
        <Header />
        <Search />
        <Selectors />
        <Main />
      </div>
    </PublicationsProvider>
  );
}

export async function getStaticProps(context) {
  const publications = getPublications();
  const selectors = getSelectors(publications);
  return {
    props: { publications, selectors },
  };
}
