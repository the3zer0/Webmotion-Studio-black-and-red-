import { processSteps } from "../../data/process";
import { ProcessCard } from "./ProcessCard";

export function ProcessGrid() {
  return (
    <div className="mt-24 grid gap-6 md:grid-cols-2">
      {processSteps.map((step) => (
        <ProcessCard
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}