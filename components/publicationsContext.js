import { useContext, createContext, useState, useEffect } from "react";
//test
const PublicationsContext = createContext({});

export function usePublications() {
  return useContext(PublicationsContext);
}

export function PublicationsProvider({ publications, selectors, children }) {
  const [selectedPublications, setSelectedPublications] = useState([
    ...publications,
  ]);

  // Query Stuff
  const [query, setQuery] = useState("");

  function changeQuery(event) {
    const newQuery = event.target.value;
    setQuery(newQuery);
  }

  function queryMatchesTitle(publication) {
    return publication.title.toLowerCase().includes(query.toLowerCase());
  }

  function queryMatchesDOI(publication) {
    return publication.doi.toLowerCase().includes(query.toLowerCase());
  }

  function queryMatchesAuthor(publication) {
    let matches = false;
    publication.authors.map((author) => {
      if (author.last.toLowerCase().includes(query.toLowerCase())) {
        matches = true;
      }
    });
    return matches;
  }

  // Sorting Stuff
  const [sortBy, setSortBy] = useState("Year");

  function isSortedByYear() {
    return sortBy === "Year";
  }

  function isSortedByTitle() {
    return sortBy === "Title";
  }

  function setSortByYear() {
    setSortBy("Year");
  }

  function setSortByTitle() {
    setSortBy("Title");
  }

  const totalPublicationsCount = publications.length;
  const [selectedPublicationsCount, setSelectedPublicationsCount] = useState(
    selectedPublications.length
  );

  // Update selectedPublicationsCount
  useEffect(() => {
    setSelectedPublicationsCount(selectedPublications.length);
  }, [selectedPublications]);

  const allYears = selectors.years;
  const allJournals = selectors.journals;
  const allFundings = selectors.fundings;
  const allPrograms = selectors.programs;
  const allKeys = selectors.keys;

  const [selectedYears, setSelectedYears] = useState([...allYears]);
  const [selectedJournals, setSelectedJournals] = useState([...allJournals]);
  const [selectedFundings, setSelectedFundings] = useState([...allFundings]);
  const [selectedPrograms, setSelectedPrograms] = useState([...allPrograms]);
  const [selectedKeys, setSelectedKeys] = useState([...allKeys]);

  // Update selectedPublications
  useEffect(() => {
    let newSelectedPublications = [];
    publications.map((publication) => {
      if (
        yearIsSelected(publication.year) &&
        journalIsSelected(publication.journal.name) &&
        fundingIsSelected(publication.fund_number) &&
        aProgramIsSelected(publication.programs) &&
        aKeyIsSelected(publication.keys)
      ) {
        newSelectedPublications.push(publication);
      }
    });

    if (query.length) {
      newSelectedPublications = newSelectedPublications.filter(function (
        publication
      ) {
        return (
          queryMatchesTitle(publication) ||
          queryMatchesDOI(publication) ||
          queryMatchesAuthor(publication)
        );
      });
    }

    setSelectedPublications(newSelectedPublications);
  }, [
    selectedYears,
    selectedJournals,
    selectedFundings,
    selectedPrograms,
    selectedKeys,
    query,
  ]);

  // Sort selectedPublications
  useEffect(() => {
    let selectedPublicationsCopy = [...selectedPublications];
    switch (sortBy) {
      case "Year":
        selectedPublicationsCopy.sort((a, b) => {
          return b.year - a.year;
        });
        setSelectedPublications(selectedPublicationsCopy);
        break;
      case "Title":
        selectedPublicationsCopy.sort((a, b) => {
          return b.title > a.title;
        });
        setSelectedPublications(selectedPublicationsCopy);
        break;
    }
  }, [sortBy]);

  // Year
  function yearIsSelected(year) {
    return selectedYears.includes(year);
  }

  function selectYear(year) {
    setSelectedYears([year, ...selectedYears]);
  }

  function deselectYear(year) {
    const idx = selectedYears.indexOf(year);
    const newSelectedYears = [...selectedYears];
    newSelectedYears.splice(idx, 1);
    if (idx > -1) setSelectedYears(newSelectedYears);
  }

  function toggleYear(year) {
    if (yearIsSelected(year)) {
      deselectYear(year);
    } else {
      selectYear(year);
    }
  }

  function selectAllYears() {
    setSelectedYears([...allYears]);
  }

  function deselectAllYears() {
    setSelectedYears([]);
  }

  //Journal
  function journalIsSelected(journal) {
    return selectedJournals.includes(journal);
  }

  function selectJournal(journal) {
    setSelectedJournals([journal, ...selectedJournals]);
  }

  function deselectJournal(journal) {
    const idx = selectedJournals.indexOf(journal);
    const newSelectedJournals = [...selectedJournals];
    newSelectedJournals.splice(idx, 1);
    if (idx > -1) setSelectedJournals(newSelectedJournals);
  }

  function toggleJournal(journal) {
    if (journalIsSelected(journal)) {
      deselectJournal(journal);
    } else {
      selectJournal(journal);
    }
  }

  function selectAllJournals() {
    setSelectedJournals([...allJournals]);
  }

  function deselectAllJournals() {
    setSelectedJournals([]);
  }

  //Funding
  function fundingIsSelected(funding) {
    return selectedFundings.includes(funding);
  }

  function selectFunding(funding) {
    setSelectedFundings([funding, ...selectedFundings]);
  }

  function deselectFunding(funding) {
    const idx = selectedFundings.indexOf(funding);
    const newSelectedFundings = [...selectedFundings];
    newSelectedFundings.splice(idx, 1);
    if (idx > -1) setSelectedFundings(newSelectedFundings);
  }

  function toggleFunding(funding) {
    if (fundingIsSelected(funding)) {
      deselectFunding(funding);
    } else {
      selectFunding(funding);
    }
  }

  function selectAllFundings() {
    setSelectedFundings([...allFundings]);
  }

  function deselectAllFundings() {
    setSelectedFundings([]);
  }

  //Program
  function programIsSelected(program) {
    return selectedPrograms.includes(program);
  }

  function aProgramIsSelected(programs) {
    for (const program of programs) {
      if (selectedPrograms.includes(program)) {
        return true;
      }
    }
    return false;
  }

  function selectProgram(program) {
    setSelectedPrograms([program, ...selectedPrograms]);
  }

  function deselectProgram(program) {
    const idx = selectedPrograms.indexOf(program);
    const newSelectedPrograms = [...selectedPrograms];
    newSelectedPrograms.splice(idx, 1);
    if (idx > -1) setSelectedPrograms(newSelectedPrograms);
  }

  function toggleProgram(program) {
    if (programIsSelected(program)) {
      deselectProgram(program);
    } else {
      selectProgram(program);
    }
  }

  function selectAllPrograms() {
    setSelectedPrograms([...allPrograms]);
  }

  function deselectAllPrograms() {
    setSelectedPrograms([]);
  }

  //Keys
  function keyIsSelected(key) {
    return selectedKeys.includes(key);
  }

  function aKeyIsSelected(keys) {
    for (const key of keys) {
      if (selectedKeys.includes(key)) {
        return true;
      }
    }
    return false;
  }

  function selectKey(key) {
    setSelectedKeys([key, ...selectedKeys]);
  }

  function deselectKey(key) {
    const idx = selectedKeys.indexOf(key);
    const newSelectedKeys = [...selectedKeys];
    newSelectedKeys.splice(idx, 1);
    if (idx > -1) setSelectedKeys(newSelectedKeys);
  }

  function toggleKey(key) {
    if (keyIsSelected(key)) {
      deselectKey(key);
    } else {
      selectKey(key);
    }
  }

  function selectAllKeys() {
    setSelectedKeys([...allKeys]);
  }

  function deselectAllKeys() {
    setSelectedKeys([]);
  }

  const value = {
    selectedPublications,
    setSelectedPublications,
    query,
    setQuery,
    changeQuery,
    sortBy,
    setSortBy,
    isSortedByYear,
    isSortedByTitle,
    setSortByYear,
    setSortByTitle,
    totalPublicationsCount,
    selectedPublicationsCount,
    setSelectedPublicationsCount,
    allYears,
    allJournals,
    allFundings,
    allPrograms,
    allKeys,
    selectedYears,
    setSelectedYears,
    selectedJournals,
    setSelectedJournals,
    selectedFundings,
    setSelectedFundings,
    selectedPrograms,
    setSelectedPrograms,
    selectedKeys,
    setSelectedKeys,
    yearIsSelected,
    toggleYear,
    selectAllYears,
    deselectAllYears,
    journalIsSelected,
    toggleJournal,
    selectAllJournals,
    deselectAllJournals,
    fundingIsSelected,
    toggleFunding,
    selectAllFundings,
    deselectAllFundings,
    programIsSelected,
    toggleProgram,
    selectAllPrograms,
    deselectAllPrograms,
    keyIsSelected,
    toggleKey,
    selectAllKeys,
    deselectAllKeys,
  };

  return (
    <PublicationsContext.Provider value={value}>
      {children}
    </PublicationsContext.Provider>
  );
}
