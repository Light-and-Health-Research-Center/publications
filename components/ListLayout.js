import PublicationListItem from "./PublicationListItem";
import { usePublications } from "../contexts/publicationsContext";

export default function ListLayout() {
  const context = usePublications();
  return (
    <div className="flex flex-col gap-2 mb-8">
      {context.selectedPublications.map((publication) => (
        <PublicationListItem
          publication={publication}
          key={publication.title}
        />
      ))}
    </div>
  );
}
