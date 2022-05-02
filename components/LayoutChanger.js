import { ViewGridIcon, ViewListIcon } from "@heroicons/react/solid";
import { usePublications } from "../contexts/publicationsContext";

export default function LayoutChanger() {
  const context = usePublications();
  return (
    <div className="flex text-black-60">
      <button
        className="border rounded-l-md"
        onClick={() => {
          context.setLayoutGrid();
        }}
      >
        <ViewGridIcon
          className={`w-7 p-1  ${
            context.layout === "grid"
              ? "text-barbiePink-80 hover:text-barbiePink-100"
              : "hover:text-black-85"
          }`}
        />
      </button>
      <button
        className="border rounded-r-md"
        onClick={() => {
          context.setLayoutList();
        }}
      >
        <ViewListIcon
          className={`w-7 p-1 ${
            context.layout === "list"
              ? "text-barbiePink-80 hover:text-barbiePink-100"
              : "hover:text-black-85"
          }`}
        />
      </button>
    </div>
  );
}
