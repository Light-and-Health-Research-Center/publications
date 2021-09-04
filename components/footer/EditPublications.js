import EditPublicationsButton from "./EditPublicationsButton";

export default function EditPublications() {
  return (
    <div>
      <h5>Publications</h5>
      <p className="lg:text-sm mb-2">
        See a typo? Want to edit/add a publication?
      </p>
      <EditPublicationsButton />
    </div>
  );
}
