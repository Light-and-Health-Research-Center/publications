import { usePublications } from "../contexts/publicationsContext";

export default function Count() {
  const context = usePublications();
  return (
    <span className="inline-block text-sm text-black-60 my-auto">
      {context.selectedPublicationsCount} of {context.totalPublicationsCount}{" "}
      publications
    </span>
  );
}
