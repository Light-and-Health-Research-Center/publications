import CardPill from "./CardPill";
import Link from "next/link";

export default function PublicationCard({ publication }) {
  return (
    <a
      href={publication.link}
      target="_blank"
      rel="noreferrer"
      className="bg-white-100 rounded-lg cursor-pointer transition duration-150 ease-in-out _hover:hover:-translate-y-px  ms-focus-barbiePink _hover:hover:drop-shadow-lg"
    >
      <div className="border border-black-20 rounded-lg p-4">
        <h4 className="font-bold leading-5 mb-2">{publication.title}</h4>
        {publication.authors && (
          <div className="block text-black-85">
            <h6 className="inline-block mr-2 text-black-100">Author(s):</h6>
            {publication.authors.map((author, idx) => (
              <span key={author.last}>{`${author.last && author.last} ${
                author.first && author.first[0]
              }${author.middle_initial && author.middle_initial}${
                idx === publication.authors.length - 1 ? "" : ", "
              }`}</span>
            ))}
          </div>
        )}
        {publication.year && (
          <div className="block text-black-85">
            <h6 className="inline-block mr-2 text-black-100">Year:</h6>
            {publication.year}
          </div>
        )}
        {publication.fund_number && (
          <div className="block text-black-85">
            <h6 className="inline-block mr-2 text-black-100">Funding:</h6>
            {publication.fund_number}
          </div>
        )}
        {publication.journal && (
          <div className="block text-black-85">
            <h6 className="inline-block mr-2 text-black-100">Journal:</h6>
            {`${publication.journal.name} ${publication.journal.extra}`}
          </div>
        )}
        {publication.doi && (
          <div className="block text-black-85">
            <h6 className="inline-block mr-2 text-black-100">DOI:</h6>
            {publication.doi}
          </div>
        )}
        {publication.keys && (
          <div className="block text-black-85">
            <h6 className="inline-block mr-2 text-black-100">Key(s):</h6>
            {publication.keys.map((key, idx) => (
              <span key={key}>{`${key}${
                idx === publication.keys.length - 1 ? "" : ", "
              }`}</span>
            ))}
          </div>
        )}
        {publication.programs && (
          <div className="mt-2">
            {publication.programs.map((program) => (
              <CardPill program={program} key={program} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
