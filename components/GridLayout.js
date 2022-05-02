import PublicationCard from "./PublicationCard";
import { usePublications } from "../contexts/publicationsContext";

export default function GridLayout() {
  const context = usePublications();
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-8">
      {context.selectedPublications.map((publication) => (
        <PublicationCard publication={publication} key={publication.title} />
      ))}
    </div>
  );
}
