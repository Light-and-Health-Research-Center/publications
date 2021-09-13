import ListItemPorgramSquare from "./ListItemProgramSquare";

export default function PublicationListItem({ publication }) {
  return (
    <a
      href={publication.link || "/"}
      target="_blank"
      rel="noreferrer"
      className="group bg-white-100 rounded-sm border drop-shadow-sm transition duration-150 ease-in-out _hover:hover-translate-y-1 _hover:hover:scale-101 ms-focusBarbiPink"
    >
      <div className="flex p-3">
        <div className="flex-none w-12 my-auto">
          {publication.year && (
            <p className="text-black-100 border-r">{publication.year}</p>
          )}
        </div>
        <div className="flex-grow my-auto mx-2 md:mx-3 lg:mx-4 line-clamp-2">
          {publication.title && (
            <div className="flex">
              <div className="flex-none max-w-20 my-auto">
                <div
                  className={`${
                    publication.programs.length > 1
                      ? `${
                          publication.programs.length === 2
                            ? "grid grid-rows-2 grid-flow-col mx-1.5"
                            : "grid grid-rows-2 grid-flow-col"
                        }`
                      : "flex mx-1.5"
                  } gap-1`}
                >
                  {publication.programs &&
                    publication.programs.map((program) => (
                      <ListItemPorgramSquare program={program} key={program} />
                    ))}
                </div>
              </div>
              <p className="text-cetaceanBlue-100 font-medium text-sm md:text-base lg:text-lg ml-2 md:ml-3 lg:ml-4">
                {publication.title}
              </p>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
