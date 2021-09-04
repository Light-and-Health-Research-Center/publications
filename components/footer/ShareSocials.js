import { Facebook, Linkedin, Twitter } from "@icons-pack/react-simple-icons";

export default function ShareSocials() {
  const pageUrl = "https://publications.light-health.org";
  return (
    <div className="flex gap-4">
      <a
        href={`https://www.facebook.com/sharer.php?u=${pageUrl}`}
        target="_blank"
        rel="noreferrer"
        className="focus:outline-none focus:ring-2 ring-barbiePink-60 ring-offset-2 rounded-sm"
      >
        <Facebook color="#1877F2" size={32} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?url=${pageUrl}`}
        target="_blank"
        rel="noreferrer"
        className="focus:outline-none focus:ring-2 ring-barbiePink-60 ring-offset-2 rounded-sm"
      >
        <Linkedin color="#0A66C2" size={32} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${pageUrl}`}
        target="_blank"
        rel="noreferrer"
        className="focus:outline-none focus:ring-2 ring-barbiePink-60 ring-offset-2 rounded-sm"
      >
        <Twitter color="#1DA1F2" size={32} />
      </a>
    </div>
  );
}
