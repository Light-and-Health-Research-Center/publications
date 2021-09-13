function HumanSquare() {
  return <div className={`rounded-sm bg-programs-human-100 w-2 h-2`}></div>;
}

function PlantSquare() {
  return <div className={`rounded-sm bg-programs-plant-100 w-2 h-2`}></div>;
}

function TransportationSquare() {
  return (
    <div className={`rounded-sm bg-programs-transportation-100 w-2 h-2`}></div>
  );
}

function EnergySquare() {
  return <div className={`rounded-sm bg-programs-energy-100 w-2 h-2`}></div>;
}

export default function ListItemProgramSquare({ program }) {
  switch (program) {
    case "human":
      return <HumanSquare />;
    case "plant":
      return <PlantSquare />;
    case "transportation":
      return <TransportationSquare />;
    case "energy":
      return <EnergySquare />;
    default:
      return null;
  }
}
