export interface Node {
  id: string;
  name: string;
  parent?: string;
}

export const nodes: Node[] = [
  // ROOT LEVEL
  { id: "equipments", name: "Equipments" },

  // LEVEL 1
  { id: "engine", name: "Engine", parent: "equipments" },
  { id: "deck", name: "Deck", parent: "equipments" },
  { id: "accomodation", name: "Accomodation", parent: "equipments" },
  { id: "misc.", name: "Misc.", parent: "equipments" },

  // LEVEL 2
  { id: "main-engine-propulsion", name: "Main Engine & Propulsion", parent: "engine" },
  { id: "power-generation", name: "Power Generation", parent: "engine" },
  { id: "aux-boiler", name: "Aux boiler", parent: "engine" },
  { id: "aux-machinery", name: "Aux machinary", parent: "engine" },
  { id: "electrical-automation", name: "Electrical & Automation", parent: "engine" },
  { id: "tank-systems", name: "Tank Systems", parent: "engine" },
  { id: "dp-system", name: "DP System", parent: "engine" },
  { id: "others", name: "Others", parent: "engine" },

  // LEVEL 3
  { id: "main-engine", name: "Main Engine", parent: "main-engine-propulsion" },
  { id: "propeller", name: "Propeller", parent: "main-engine-propulsion" },
  { id: "shafting", name: "Shafting", parent: "main-engine-propulsion" },

  // LEVEL 4
  { id: "air-exhaust", name: "Air & Exhaust System", parent: "main-engine" },
  { id: "control-safety", name: "Control & Safety System", parent: "main-engine" },
  { id: "fuel-system", name: "Fuel System", parent: "main-engine" },
  { id: "cooling-water", name: "Cooling Water System", parent: "main-engine" },
  { id: "cylinder-liner", name: "Cylinder & Lubrication", parent: "main-engine" },

  // LEVEL 5
  { id: "me-turbocharger", name: "ME Turbocharger", parent: "air-exhaust" },
  { id: "aux-blower", name: "Aux Blower", parent: "air-exhaust" },
  { id: "aux-blower-2", name: "Aux Blower 2", parent: "air-exhaust" },
  { id: "charge-air-cooler", name: "Charge Air Cooler", parent: "air-exhaust" },
  { id: "exhaust-valve", name: "Exhaust Valve Complete", parent: "air-exhaust" },

  // LEVEL 6
  { id: "spare-parts-box", name: "Spare Parts Box", parent: "me-turbocharger" },
  { id: "seal", name: "Seal", parent: "me-turbocharger" },
  { id: "o-ring", name: "O-Ring", parent: "me-turbocharger" },
  { id: "seal-turbine", name: "Seal - Turbine Side", parent: "me-turbocharger" },
];
