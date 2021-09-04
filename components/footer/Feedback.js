import SubmitIssueButton from "./SubmitIssueButton";

export default function Feedback() {
  return (
    <div>
      <h5>Feedback</h5>
      <p className="lg:text-sm mb-2">
        Something not working right? Want to make a suggestion?
      </p>
      <SubmitIssueButton />
    </div>
  );
}
