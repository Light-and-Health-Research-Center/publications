import PublicationCard from "./PublicationCard";
import { usePublications } from "./publicationsContext";

export default function CardSection() {
  const context = usePublications();
  return (
    <div className="gap-y-4 gap-x-12 grid grid-cols-1 lg:grid-cols-2 mb-8">
      {context.selectedPublications.map((publication) => (
        <PublicationCard publication={publication} key={publication.doi} />
      ))}
    </div>
  );
}
