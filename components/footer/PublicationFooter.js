import EditPublications from "./EditPublications";
import Feedback from "./Feedback";
import SharePage from "./SharePage";

export default function PublicationFooter() {
  return (
    <div className="border-t py-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 rounded-lg bg-white-off justify-between px-4 py-2 border">
        <div className="mb-4 lg:mb-2">
          <SharePage />
        </div>
        <div className="mb-4 lg:mb-2">
          <EditPublications />
        </div>
        <div className="mb-4 lg:mb-2">
          <Feedback />
        </div>
      </div>
    </div>
  );
}
