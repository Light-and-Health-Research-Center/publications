import FundingSelector from "./FundingSelector";
import JournalSelector from "./JournalSelector";
import KeySelector from "./KeySelector";
import ProgramSelector from "./ProgramSelector";
import YearSelector from "./YearSelector";

export default function Selectors() {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      <YearSelector />
      <JournalSelector />
      <FundingSelector />
      <ProgramSelector />
      <KeySelector />
    </div>
  );
}
