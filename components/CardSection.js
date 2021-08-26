import PublicationCard from "./PublicationCard";
import { usePublications } from "./publicationsContext";
import VoidMan from "./undraw/VoidMan";

export default function CardSection() {
  const context = usePublications();
  return (
    <div className="gap-4 grid grid-cols-2">
      {context.selectedPublications.map((publication) => (
        <PublicationCard publication={publication} key={publication.doi} />
      ))}
    </div>
  );
}
