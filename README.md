Vessel Hierarchy Tree – Frontend Interview Task

This project implements a Vessel Hierarchy Tree UI for 3S Smart Ship Solutions.
It visualizes complex vessel equipment structures using a progressive drill-down interaction model inspired by the provided Figma design.

The application is built with React + TypeScript + TailwindCSS + shadcn/ui and demonstrates scalable frontend architecture, clean state handling, and strong UX principles.

🔗 Live Links
Live Demo: https://vessel-hierarchy-tree.vercel.app/
Demo Walkthrough Video: https://www.loom.com/share/f15e3fefc88141dfa4ef33006e125162

✨ Features
Progressive column-based hierarchy tree
Expand / Collapse using + / – buttons
Automatic sibling fading to maintain focus
Search with auto-expand parent chain
Curved connector lines between nodes
Fully data-driven from JSON
Clean sidebar with accordions
Breadcrumb navigation
Realistic user info footer section

TECH STACK
| Technology         | Purpose                         |
| ------------------ | ------------------------------- |
| React + TypeScript | Core framework                  |
| TailwindCSS        | Styling                         |
| shadcn/ui          | Sidebar Accordion & UI elements |
| ReactFlow          | Graph edge rendering            |
| Lucide Icons       | Iconography                     |
| Vite               | Build system                    |

Folder Structure
src/
 ├── data/
 │     └── nodes.ts
 ├── utils/
 │     ├── buildTree.ts
 │     ├── parentMap.ts
 │     ├── findNode.ts
 │     └── buildOpenPath.ts
 ├── components/
 │     ├── sidebar/
 │     │     ├── Sidebar.tsx
 │     │     └── SidebarAccordion.tsx
 │     ├── breadcrumb/Breadcrumb.tsx
 │     ├── search/SearchBar.tsx
 │     └── tree/
 │           ├── VesselTree.tsx
 │           └── PillNode.tsx
 ├── App.tsx
 └── main.tsx

How to Run Locally
git clone https://github.com/Shubham-168/vessel-hierarchy-tree.git
cd vessel-hierarchy-tree
npm install
npm run dev

then open:
http://localhost:5173 (might be changed)


Architecture Overview
1. Data Handling
Hierarchy data is stored as a flat JSON array:

{ id: "engine", name: "Engine", parent: "equipments" }

This mirrors real backend responses and avoids hardcoded JSX trees.

2. Tree Builder
buildTree.ts converts flat data into nested structures for rendering.

3. Progressive Expansion Logic
expanded state tracks one active node per hierarchy level:

{
  0: "equipments",
  1: "engine",
  2: "main-engine-propulsion"
}

This ensures:
Only one branch opens at a time
Siblings fade automatically
Layout remains clean

4. Search System
Search is powered by:
parentMap.ts – builds parent lookup
findNode.ts – finds matching node
buildOpenPath.ts – auto-expands full parent chain
Typing "Seal" instantly jumps to the Seal node and opens all parent levels.

5. Rendering Engine
VesselTree.tsx recursively builds:
ReactFlow nodes
Edges between parent–child pairs
X/Y positioning based on hierarchy depth

🎨 UX Principles
Feature	Benefit
Sibling fading	Keeps user focused
Progressive expansion	Prevents clutter
Breadcrumb	Navigation clarity
Search auto-open	Fast access to deep nodes
Curved edges	Visual hierarchy clarity

⚠️ Trade-offs
Decision	Reason
Flat JSON data	Scales better with backend APIs
One expanded node per level	Keeps UX clean
ReactFlow	Used only for edges; layout controlled manually

📌 Conclusion
This project demonstrates real-world frontend engineering principles for data-heavy maritime systems.
It is scalable, backend-ready, and designed with long-term maintainability in mind.

