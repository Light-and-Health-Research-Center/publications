import Count from "./Count";
import GridLayout from "./GridLayout";
import LayoutChanger from "./LayoutChanger";
import ListLayout from "./ListLayout";
import { usePublications } from "./publicationsContext";
import SortBy from "./SortBy";
import VoidMan from "./undraw/VoidMan";

export default function Main() {
  const context = usePublications();
  return (
    <main className="my-12">
      {context.selectedPublications && context.selectedPublications.length ? (
        <>
          <div className="flex justify-between mb-4 mx-2">
            <Count />
            <div className="flex gap-2">
              <SortBy />
              <LayoutChanger />
            </div>
          </div>
          {context.layout === "list" ? <ListLayout /> : <GridLayout />}
        </>
      ) : (
        <div className="w-max mx-auto">
          <div className="mt-24">
            <VoidMan />
            <h5 className="text-black-60 mt-4 text-center">
              There&apos;s nothing here.
            </h5>
          </div>
        </div>
      )}
    </main>
  );
}
