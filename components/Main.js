import CardSection from "./CardSection";
import Count from "./Count";
import { usePublications } from "./publicationsContext";
import SortBy from "./SortBy";
import VoidMan from "./undraw/VoidMan";

export default function Main() {
  const context = usePublications();
  return (
    <main className="mt-12">
      {context.selectedPublications && context.selectedPublications.length ? (
        <>
          <div className="flex justify-between mb-4">
            <Count />
            <div>
              <SortBy />
            </div>
          </div>
          <CardSection />
        </>
      ) : (
        <div className="w-max mx-auto mt-12">
          <VoidMan />
          <h5 className="text-black-60 mt-4 text-center">
            There&apos;s nothing here.
          </h5>
        </div>
      )}
    </main>
  );
}
