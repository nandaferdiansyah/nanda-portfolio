import { E_SIMPEL_SCREENSHOTS, type ScreenshotProps } from "./e-simpel";

export interface PortfolioItemProps {
  src: string;
  title: string;
  /** Must match a skill name in stacks.tsx so the tool badge gets its icon. */
  tool: string;
  description: string;
  /** Web/app work opens a walkthrough popup instead of a single image. */
  screenshots?: ScreenshotProps[];
  links?: { label: string; href: string }[];
}

const DIR = "/images/portofolio desain";

export const PORTFOLIO_ITEMS: PortfolioItemProps[] = [
  {
    src: "/images/e-simpel/Dashboard.png",
    title: "SIMPEL — Ministry Procedure & Service System",
    tool: "Web System",
    description:
      "Web system for the Ministry of ATR/BPN covering Process Map, BPMN, SOP, and Service Standards — from drafting studio to ministerial determination.",
    screenshots: E_SIMPEL_SCREENSHOTS,
    links: [
      { label: "Visit SIMPEL", href: "https://tlrb.ortalamr.id/e-sop-atrbpn/" },
      {
        label: "Read the case study",
        href: "/projects/simpel-ketatalaksanaan-system",
      },
    ],
  },
  {
    src: `${DIR}/baglog-press-1.jpg`,
    title: "Mushroom Baglog Press Machine",
    tool: "SolidWorks",
    description:
      "Press for mushroom growing substrate — motor and chain drive turning four cam discs that push the moulds through a shared frame.",
    screenshots: [
      {
        src: `${DIR}/baglog-press-1.jpg`,
        caption:
          "Full assembly — four moulds on a common base, driven from a single motor through a chain and cam-disc line.",
      },
      {
        src: `${DIR}/baglog-press-2.jpg`,
        caption:
          "Drive side — gearbox, sprockets, and the shafts that convert one motor into four synchronised press strokes.",
      },
      {
        src: `${DIR}/baglog-press-3.jpg`,
        caption:
          "Press head detail — guide rods and the plate that compacts the substrate into the mould.",
      },
      {
        src: `${DIR}/baglog-press-4.jpg`,
        caption:
          "Frame and mould seats, showing the clearance an operator needs to load and remove baglogs.",
      },
      {
        src: `${DIR}/baglog-press-5.jpg`,
        caption:
          "Static stress study on the frame — peak axial and bending stress stays under the 250 MPa yield of the section used.",
      },
    ],
  },
  {
    src: `${DIR}/forklift-1.jpg`,
    title: "Manual Hydraulic Stacker",
    tool: "SolidWorks",
    description:
      "Hand-operated stacker with a hydraulic cylinder driving the fork carriage up a welded mast, built for a workshop client.",
    screenshots: [
      {
        src: `${DIR}/forklift-1.jpg`,
        caption:
          "Assembly with the mast raised — fork carriage, lifting arm, and the cylinder that drives it.",
      },
      {
        src: `${DIR}/forklift-2.jpg`,
        caption:
          "Alternate view showing the linkage geometry between cylinder, arm, and carriage.",
      },
      {
        src: `${DIR}/forklift-3.jpg`,
        caption:
          "Base frame and castors — the wheelbase that keeps the unit stable under an offset load.",
      },
      {
        src: `${DIR}/forklift-4.jpg`,
        caption:
          "Stress study on the lifting arm, run to find where the section needed reinforcing before release.",
      },
    ],
  },
  {
    src: `${DIR}/hydraulic-jack-1.jpg`,
    title: "Hydraulic Bottle Jack",
    tool: "SolidWorks",
    description:
      "Bottle jack modelled part by part — cylinder, ram, pump plunger, and release valve assembled into a working mechanism.",
    screenshots: [
      {
        src: `${DIR}/hydraulic-jack-1.jpg`,
        caption:
          "Jack at rest — main cylinder, extension screw, and the pump lever socket on the right.",
      },
      {
        src: `${DIR}/hydraulic-jack-2.jpg`,
        caption: "Opposite side, showing the release valve and base casting.",
      },
      {
        src: `${DIR}/hydraulic-jack-3.jpg`,
        caption:
          "Ram extended, checking travel and clearance against the pump linkage.",
      },
    ],
  },
  {
    src: `${DIR}/brompton-bike-1.jpg`,
    title: "Brompton-Style Foldable Bike",
    tool: "Autodesk Inventor",
    description:
      "Folding bicycle modelled from frame hinge to drivetrain, then rendered in KeyShot — a commissioned build for a client.",
    screenshots: [
      {
        src: `${DIR}/brompton-bike-1.jpg`,
        caption:
          "Three-quarter view unfolded — hinged main tube, riser stem, and the drivetrain in riding position.",
      },
      {
        src: `${DIR}/brompton-bike-2.jpg`,
        caption: "Drive side, showing chainset, derailleur, and rear triangle.",
      },
      {
        src: `${DIR}/brompton-bike-3.jpg`,
        caption:
          "Front end detail — fork, calliper brake, and the hinge clamp that locks the frame.",
      },
      {
        src: `${DIR}/brompton-bike-4.jpg`,
        caption: "Rear view with mudguard and seat post at riding height.",
      },
      {
        src: `${DIR}/brompton-bike-5.jpg`,
        caption:
          "Low angle across the folding joint, the detail that decides whether the bike folds cleanly.",
      },
    ],
  },
  {
    src: `${DIR}/car-lifting-dolly-1.jpg`,
    title: "Custom Hydraulic Car Dolly",
    tool: "Autodesk Inventor",
    description:
      "Four-castor dolly with a hydraulic cylinder spreading the arms — designed to lift and move a car sideways in a tight workshop.",
    screenshots: [
      {
        src: `${DIR}/car-lifting-dolly-1.jpg`,
        caption:
          "Full frame — hydraulic cylinder at the centre, four swivel castors carrying the load.",
      },
      {
        src: `${DIR}/car-lifting-dolly-2.jpg`,
        caption: "Arms spread, showing the travel the cylinder has to deliver.",
      },
      {
        src: `${DIR}/car-lifting-dolly-3.jpg`,
        caption:
          "Castor mount detail — bolted plate and the bracket that transfers load into the tube.",
      },
      {
        src: `${DIR}/car-lifting-dolly-4.jpg`,
        caption: "Top view of the cross member and cylinder anchoring points.",
      },
      {
        src: `${DIR}/car-lifting-dolly-5.jpg`,
        caption: "Arms closed — the stored footprint when the dolly is parked.",
      },
    ],
  },
  {
    src: `${DIR}/minimalist-house-1.jpg`,
    title: "Minimalist House",
    tool: "SketchUp",
    description:
      "Single-storey house modelled in SketchUp and rendered in Enscape — hipped tile roof, stone-clad plinth, and a full window line.",
    screenshots: [
      {
        src: `${DIR}/minimalist-house-1.jpg`,
        caption:
          "Street corner view — hipped tile roof, white render above a stone plinth, and the covered entry on the right.",
      },
      {
        src: `${DIR}/minimalist-house-2.jpg`,
        caption: "Front elevation with the terrace column and planting bed.",
      },
      {
        src: `${DIR}/minimalist-house-3.jpg`,
        caption: "Side approach, showing the window rhythm along the long wall.",
      },
      {
        src: `${DIR}/minimalist-house-4.jpg`,
        caption: "Rear garden side and the roof overhang that shades it.",
      },
      {
        src: `${DIR}/minimalist-house-5.jpg`,
        caption: "Entry detail — door, awning windows, and the stone base course.",
      },
      {
        src: `${DIR}/minimalist-house-6.jpg`,
        caption: "Wider context view with the boundary wall and street edge.",
      },
    ],
  },
  {
    src: `${DIR}/industrial-site-1.jpg`,
    title: "Industrial Site Masterplan",
    tool: "SketchUp",
    description:
      "Site layout for an industrial yard — warehouse, office block, truck bays, and parking arranged around the circulation route.",
    screenshots: [
      {
        src: `${DIR}/industrial-site-1.jpg`,
        caption:
          "Aerial three-quarter view — warehouse and office to the left, truck and car parking laid out to the right.",
      },
      {
        src: `${DIR}/industrial-site-2.jpg`,
        caption:
          "Overview across the full plot, showing how the access road feeds every bay.",
      },
      {
        src: `${DIR}/industrial-site-3.jpg`,
        caption:
          "Top view — the parking grid and turning space sized for articulated trucks.",
      },
      {
        src: `${DIR}/industrial-site-4.jpg`,
        caption: "Front elevation from the main road, with the gate and guard post.",
      },
      {
        src: `${DIR}/industrial-site-5.jpg`,
        caption: "Right elevation along the boundary wall.",
      },
      {
        src: `${DIR}/industrial-site-6.jpg`,
        caption: "Left elevation, showing the warehouse loading side.",
      },
    ],
  },
  {
    src: `${DIR}/motorcycle-chassis-1.jpg`,
    title: "Motorcycle Chassis",
    tool: "SolidWorks",
    description:
      "Tubular motorcycle frame with monoshock rear suspension, swingarm pivot, and footpeg mounts modelled as a full assembly.",
    screenshots: [
      {
        src: `${DIR}/motorcycle-chassis-1.jpg`,
        caption:
          "Full frame — headstock, twin spars, monoshock, and the swingarm pivot at the rear.",
      },
      {
        src: `${DIR}/motorcycle-chassis-2.jpg`,
        caption: "Rear subframe and shock linkage detail.",
      },
      {
        src: `${DIR}/motorcycle-chassis-3.jpg`,
        caption: "Side view, showing the geometry between headstock and pivot.",
      },
    ],
  },
  {
    src: `${DIR}/jet-engine-1.jpg`,
    title: "Turbofan Engine — Exploded Assembly",
    tool: "Autodesk Inventor",
    description:
      "Turbofan modelled stage by stage — fan, compressor spools, combustor, turbine, and nozzle, presented as an exploded assembly.",
    screenshots: [
      {
        src: `${DIR}/jet-engine-1.jpg`,
        caption:
          "Exploded along the shaft axis — fan and compressor stages left, combustor and turbine centre, nozzle right.",
      },
      {
        src: `${DIR}/jet-engine-2.jpg`,
        caption: "Assembled view of the same model.",
      },
    ],
  },
  {
    src: `${DIR}/twin-steam-engine-1.jpg`,
    title: "Vertical Twin Steam Engine",
    tool: "Autodesk Inventor",
    description:
      "Twin-cylinder vertical steam engine — crankshaft, flywheel, connecting rods, and valve gear built up from individual parts.",
    screenshots: [
      {
        src: `${DIR}/twin-steam-engine-1.jpg`,
        caption:
          "Full assembly on its base plate — twin cylinders, crossheads, and the flywheel on the crankshaft.",
      },
      {
        src: `${DIR}/twin-steam-engine-2.jpg`,
        caption: "Closer view of the valve linkage and steam manifold.",
      },
    ],
  },
  {
    src: `${DIR}/g-clamp-1.jpg`,
    title: "G-Clamp",
    tool: "Autodesk Inventor",
    description:
      "G-clamp assembly — cast body, acme screw, swivel pad, and tommy bar, modelled as a parts-and-assembly exercise.",
    screenshots: [
      {
        src: `${DIR}/g-clamp-1.jpg`,
        caption: "Assembled clamp with the screw part-wound and the tommy bar in place.",
      },
      {
        src: `${DIR}/g-clamp-2.jpg`,
        caption: "Alternate angle showing the swivel pad and thread engagement.",
      },
    ],
  },
  {
    src: `${DIR}/Solidworks1.jpg`,
    title: "Mining Dump Truck",
    tool: "SolidWorks",
    description:
      "Full assembly of a rigid-frame mining dump truck — chassis, dump body, cab, and running gear.",
  },
  {
    src: `${DIR}/Solidworks1.png`,
    title: "Pump & Heat Exchanger Skid",
    tool: "SolidWorks",
    description:
      "Process skid with shell-and-tube heat exchangers, centrifugal pumps, valves, and piping on a common base frame.",
  },
  {
    src: `${DIR}/Solidworks2.jpg`,
    title: "Formula Student Chassis",
    tool: "SolidWorks",
    description:
      "Tubular space-frame chassis with double wishbone suspension, coilovers, and brake assemblies.",
  },
  {
    src: `${DIR}/Solidworks3.jpg`,
    title: "Hydraulic Scissor Lift Table",
    tool: "SolidWorks",
    description:
      "Scissor lift platform driven by a hydraulic cylinder, modelled with its power pack and guide rails.",
  },
  {
    src: `${DIR}/Inventor1.jpg`,
    title: "Pressure Vessel Skid",
    tool: "Autodesk Inventor",
    description:
      "Vertical pressure vessels mounted on a skid base with pumps, manifolds, and interconnecting piping.",
  },
  {
    src: `${DIR}/Inventor2.jpg`,
    title: "Gas Storage Plant Layout",
    tool: "Autodesk Inventor",
    description:
      "Plant layout inside a warehouse — storage tanks, elevated platform, piping runs, and access stairs.",
  },
  {
    src: `${DIR}/Inventor3.jpg`,
    title: "Mixing Tank — Technical Drawing",
    tool: "Autodesk Inventor",
    description:
      "Production drawing of a jacketed mixing tank: sections, dimensions, and a numbered parts list.",
  },
  {
    src: `${DIR}/Inventor4.jpg`,
    title: "Solar Panel Stringer Machine",
    tool: "Autodesk Inventor",
    description:
      "Machine for stringing solar cells, modelled with its frame, linear guides, and drive components.",
  },
  {
    src: `${DIR}/Fusion1.jpg`,
    title: "FDM 3D Printer",
    tool: "Fusion 360",
    description:
      "Cartesian FDM 3D printer assembly — extrusion frame, motion system, hotend carriage, and heated bed.",
  },
  {
    src: `${DIR}/Sketchup1.jpg`,
    title: "Single-Storey House Exterior",
    tool: "SketchUp",
    description:
      "Exterior visualisation of a single-storey house with hipped metal roof and front planting.",
  },
  {
    src: `${DIR}/Sketchup2.jpg`,
    title: "Pool & Garden Landscape",
    tool: "SketchUp",
    description:
      "Landscape design with swimming pool, hedging, lawn, and palm planting along the perimeter.",
  },
  {
    src: `${DIR}/Sketchup3.jpg`,
    title: "Computer Lab Interior",
    tool: "SketchUp",
    description:
      "Interior layout of a computer laboratory — workstation rows, acoustic wall panels, and display wall.",
  },
  {
    src: `${DIR}/Sketchup4.jpg`,
    title: "Minimalist House Facade",
    tool: "SketchUp",
    description:
      "Street-view render of a minimalist house facade with roof tiles, front garden, and context.",
  },
  {
    src: `${DIR}/blender1.jpg`,
    title: "Stylised 3D Character",
    tool: "Blender",
    description:
      "Character model and render with soft studio lighting and simple prop shapes.",
  },
  {
    src: `${DIR}/blender2.jpg`,
    title: "Joglo House Visualisation",
    tool: "Blender",
    description:
      "Traditional Javanese joglo house modelled with its tiered roof, timber columns, and terrace.",
  },
];

/** Tabs are derived from the items, so adding an image adds its tool tab. */
export const PORTFOLIO_TOOLS = [
  "All",
  ...Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.tool))),
] as const;
