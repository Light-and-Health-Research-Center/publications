import { PencilIcon } from "@primer/octicons-react";

export default function EditPublicationsButton() {
  return (
    <a
      href="https://github.com/Light-and-Health-Research-Center/publications/tree/main/publications"
      target="_blank"
      rel="noreferrer"
      className="group bg-white-100 border rounded-md lg:text-sm py-1 px-2 text-vividCerulean-100 hover:bg-vividCerulean-100 hover:text-white-100 focus:bg-vividCerulean-100 focus:text-white-100 focus:outline-none active:bg-vividCerulean-60"
    >
      <PencilIcon className="text-black-80 mr-2 group-hover:text-white-100 group-focus:text-white-100" />
      View publications
    </a>
  );
}
