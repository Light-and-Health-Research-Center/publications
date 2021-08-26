function HumanPill() {
  return (
    <div
      className={`rounded-full bg-programs-human-100 text-white-100 text-sm whitespace-nowrap px-2 w-max`}
    >
      Human Health
    </div>
  );
}

function PlantPill() {
  return (
    <div
      className={`rounded-full bg-programs-plant-100 text-white-100 text-sm whitespace-nowrap px-2 w-max`}
    >
      Plant Health
    </div>
  );
}

function TransportationPill() {
  return (
    <div
      className={`rounded-full bg-programs-transportation-100 text-white-100 text-sm whitespace-nowrap px-2 w-max`}
    >
      Transportation Health
    </div>
  );
}

function EnergyPill() {
  return (
    <div
      className={`rounded-full bg-programs-energy-100 text-white-100 text-sm whitespace-nowrap px-2 w-max`}
    >
      Energy Health
    </div>
  );
}

export default function CardPill({ program }) {
  switch (program) {
    case "human":
      return <HumanPill />;
    case "plant":
      return <PlantPill />;
    case "transportation":
      return <TransportationPill />;
    case "energy":
      return <EnergyPill />;
    default:
      return null;
  }
}
