import fs from "fs";
import path from "path";

const pubsDir = path.join(process.cwd(), "publications");
const pubsFiles = fs.readdirSync(pubsDir);

export function getPublications() {
  const data = [];
  pubsFiles.map((file) => {
    JSON.parse(fs.readFileSync(path.join(pubsDir, file), "utf8")).pubs.map(
      (pub) => {
        pub.programs.sort();
        data.push(pub);
      }
    );
  });
  return data;
}

export function getSelectors(publications) {
  let programs = ["human", "plant", "transportation", "energy"];
  let years = new Set();
  let journals = new Set();
  let fundings = new Set();
  let keys = new Set();
  publications.map((publication) => {
    years.add(publication.year);
    journals.add(publication.journal.name);
    fundings.add(publication.fund_number);
    publication.keys.map((key) => {
      keys.add(key);
    });
  });
  years = Array.from(years);
  journals = Array.from(journals);
  fundings = Array.from(fundings);
  keys = Array.from(keys);
  years = years.sort((a, b) => {
    return b - a;
  });
  journals = journals.sort();
  fundings = fundings.sort((a, b) => {
    return b - a;
  });
  keys = keys.sort();
  programs = programs.sort();
  return { years, journals, fundings, programs, keys };
}
