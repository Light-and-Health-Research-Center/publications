import { SearchIcon } from "@heroicons/react/solid";
import { usePublications } from "./publicationsContext";

export default function Search() {
  const context = usePublications();
  return (
    <div className="mx-auto group bg-white-100 rounded-full flex border border-black-20 ms-focus-barbiePink h-16 mb-2">
      <SearchIcon className="text-black-20 pl-2 w-12" />
      <input
        className="text-black-60 mx-2 focus:outline-none w-full mr-12"
        type="text"
        placeholder="Search publications by title, author last name, or DOI"
        onChange={(e) => {
          context.changeQuery(e);
        }}
      />
    </div>
  );
}
