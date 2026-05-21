import { useState } from "react";
import axios from "axios";

export default function Simulation() {
  const [simulation, setSimulation] = useState(null);

  const generate = async () => {
    const res = await axios.post("http://localhost:5000/api/sim/create", {
      profile: {
        personality: "creative",
        interestType: "design",
        motivation: "freedom",
      },
      career: {
        title: "Architect",
      },
    });

    setSimulation(res.data.simulation);
  };

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <button
        onClick={generate}
        className="bg-purple-600 px-4 py-2 rounded"
      >
        Generate Future Simulation 🚀
      </button>

      {simulation && (
        <div className="mt-5">
          <h1 className="text-2xl font-bold">{simulation.title}</h1>

          <p className="mt-3">{simulation.story}</p>

          <h2 className="mt-5 text-xl">Timeline</h2>
          <ul>
            {simulation.timeline.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}