import { usePublications } from "./publicationsContext";

export default function Count() {
  const context = usePublications();
  return (
    <div className="text-sm text-black-60">
      {context.selectedPublicationsCount} of {context.totalPublicationsCount}{" "}
      publications
    </div>
  );
}
