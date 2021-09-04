import ShareSocials from "./ShareSocials";

export default function SharePage({ links }) {
  return (
    <div>
      <h5>Share</h5>
      <p className="lg:text-sm mb-2">Help us spread this information.</p>
      <ShareSocials />
    </div>
  );
}
