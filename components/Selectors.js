import FundingSelector from "./FundingSelector";
import JournalSelector from "./JournalSelector";
import KeySelector from "./KeySelector";
import ProgramSelector from "./ProgramSelector";
import YearSelector from "./YearSelector";

export default function Selectors() {
  return (
    <div className="relative">
      <div className="absolute right-0 bg-gradient-to-l from-white-100 w-12 h-12"></div>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <YearSelector />
        <JournalSelector />
        <FundingSelector />
        <ProgramSelector />
        <KeySelector />
      </div>
    </div>
  );
}
