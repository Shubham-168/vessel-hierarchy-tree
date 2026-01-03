// import { Node, Edge } from "reactflow";

export const nodes = [
  // ROOT LEVEL
  { id: "equipments", position: { x: 80, y: 260 }, data: { label: "Equipments", type: "root" }, type: "vessel" },

  // LEVEL 1
  { id: "engine", position: { x: 320, y: 260 }, data: { label: "Engine", type: "engine" }, type: "vessel" },

  // LEVEL 2
  { id: "main-engine-propulsion", position: { x: 600, y: 80 }, data: { label: "Main Engine & Propulsion", type: "red" }, type: "vessel" },
  { id: "power-generation", position: { x: 600, y: 150 }, data: { label: "Power Generation", type: "red" }, type: "vessel" },
  { id: "aux-boiler", position: { x: 600, y: 220 }, data: { label: "Aux boiler", type: "red" }, type: "vessel" },
  { id: "aux-machinery", position: { x: 600, y: 290 }, data: { label: "Aux machinary", type: "red" }, type: "vessel" },
  { id: "electrical-automation", position: { x: 600, y: 360 }, data: { label: "Electrical & Automation", type: "red" }, type: "vessel" },
  { id: "tank-systems", position: { x: 600, y: 430 }, data: { label: "Tank Systems", type: "red" }, type: "vessel" },
  { id: "dp-system", position: { x: 600, y: 500 }, data: { label: "DP System", type: "red" }, type: "vessel" },
  { id: "others", position: { x: 600, y: 570 }, data: { label: "Others", type: "red" }, type: "vessel" },

  // LEVEL 3
  { id: "main-engine", position: { x: 880, y: 80 }, data: { label: "Main Engine", type: "blueDark" }, type: "vessel" },
  { id: "propeller", position: { x: 880, y: 140 }, data: { label: "Propeller", type: "blueLight" }, type: "vessel" },
  { id: "shafting", position: { x: 880, y: 200 }, data: { label: "Shafting", type: "blueLight" }, type: "vessel" },

  // LEVEL 4
  { id: "air-exhaust", position: { x: 1160, y: 80 }, data: { label: "Air & Exhaust System", type: "gray" }, type: "vessel" },
  { id: "control-safety", position: { x: 1160, y: 140 }, data: { label: "Control & Safety System", type: "grayLight" }, type: "vessel" },
  { id: "fuel-system", position: { x: 1160, y: 200 }, data: { label: "Fuel System", type: "grayLight" }, type: "vessel" },
  { id: "cooling-water", position: { x: 1160, y: 260 }, data: { label: "Cooling Water System", type: "grayLight" }, type: "vessel" },
  { id: "cylinder-liner", position: { x: 1160, y: 320 }, data: { label: "Cylinder Liner & Lubrication", type: "grayLight" }, type: "vessel" },

  // LEVEL 5
  { id: "me-turbocharger", position: { x: 1440, y: 80 }, data: { label: "ME Turbocharger", type: "darkGray" }, type: "vessel" },
  { id: "aux-blower", position: { x: 1440, y: 140 }, data: { label: "Aux Blower", type: "grayDisabled" }, type: "vessel" },
  { id: "aux-blower-2", position: { x: 1440, y: 200 }, data: { label: "Aux Blower 2", type: "grayDisabled" }, type: "vessel" },
  { id: "charge-air-cooler", position: { x: 1440, y: 260 }, data: { label: "Charge Air Cooler", type: "grayDisabled" }, type: "vessel" },
  { id: "exhaust-valve", position: { x: 1440, y: 320 }, data: { label: "Exhaust Valve Complete", type: "grayDisabled" }, type: "vessel" },

  // LEVEL 6
  { id: "spare-parts-box", position: { x: 1720, y: 80 }, data: { label: "Spare Parts Box", type: "green" }, type: "vessel" },
  { id: "seal", position: { x: 1720, y: 140 }, data: { label: "Seal", type: "green" }, type: "vessel" },
  { id: "o-ring", position: { x: 1720, y: 200 }, data: { label: "O-Ring", type: "green" }, type: "vessel" },
  { id: "seal-turbine", position: { x: 1720, y: 260 }, data: { label: "Seal - Turbine Side", type: "green" }, type: "vessel" },
];

export const edges = [
  { id:'e1-2', source:'1', target:'2', type:'smoothstep' },
  { id:'e2-3', source:'2', target:'3', type:'smoothstep' },
  { id:'e2-4', source:'2', target:'4', type:'smoothstep' },
  { id:'e2-5', source:'2', target:'5', type:'smoothstep' },
  { id:'e2-6', source:'2', target:'6', type:'smoothstep' }
];
