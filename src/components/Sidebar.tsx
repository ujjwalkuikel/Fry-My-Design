"use client";

import React from "react";

interface Component {
  label: string;
  icon: string;
}

interface EdgeStyle {
  type: string;
  animated: boolean;
  directed: boolean;
  stroke: string;
}

interface SidebarProps {
  onAddNode: (label: string, icon: string) => void;
  edgeStyle: EdgeStyle;
  setEdgeStyle: React.Dispatch<React.SetStateAction<EdgeStyle>>;
  layoutMode: string;
  setLayoutMode: React.Dispatch<React.SetStateAction<string>>;
}

const components: Component[] = [
  { label: "Browser", icon: "browser-chrome.svg" },
  { label: "browser", icon: "browser.svg" },
  { label: "cache", icon: "cache.svg" },
  { label: "database", icon: "database.svg" },
  { label: "docker", icon: "docker.svg" },
  { label: "gcp", icon: "gcp.svg" },
  { label: "kubernetes", icon: "kubernetes.svg" },
  { label: "server", icon: "server.svg" },
];

const Sidebar: React.FC<SidebarProps> = ({
  onAddNode,
  edgeStyle,
  setEdgeStyle,
  layoutMode,
  setLayoutMode,
}) => {
  return (
    <div className="w-[200px] p-3 border-r border-gray-300 flex flex-col gap-2 text-sm">
      <h4 className="font-semibold">🧱 Nodes</h4>
      {components.map((comp) => (
        <button
          key={comp.label}
          onClick={() => onAddNode(comp.label, comp.icon)}
          className="px-3 py-2 text-left w-full hover:bg-gray-100 rounded text-xs border border-gray-200"
        >
          {comp.label}
        </button>
      ))}

      <h4 className="mt-3 font-semibold">🪡 Edge Curve</h4>
      <select
        value={edgeStyle?.type ?? "default"}
        onChange={(e) =>
          setEdgeStyle((prev) => ({ ...prev, type: e.target.value }))
        }
        className="px-2 py-1 border border-gray-300 rounded text-xs"
      >
        <option value="default">Default</option>
        <option value="straight">Straight</option>
        <option value="smoothstep">Smooth Step</option>
        <option value="bezier">Bezier</option>
      </select>

      <h4 className="mt-3 font-semibold">🔌 Edge Settings</h4>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={edgeStyle.animated}
          onChange={(e) =>
            setEdgeStyle((prev) => ({ ...prev, animated: e.target.checked }))
          }
        />
        Animated
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={edgeStyle.directed}
          onChange={(e) =>
            setEdgeStyle((prev) => ({ ...prev, directed: e.target.checked }))
          }
        />
        Directed (arrow)
      </label>

      <label className="flex flex-col text-xs mt-2">
        Stroke Color:
        <input
          type="color"
          value={edgeStyle.stroke}
          onChange={(e) =>
            setEdgeStyle((prev) => ({ ...prev, stroke: e.target.value }))
          }
          className="w-1/2 mt-1"
        />
      </label>

      <h4 className="mt-3 font-semibold">🧠 Layout</h4>
      <select
        value={layoutMode}
        onChange={(e) => setLayoutMode(e.target.value)}
        className="px-2 py-1 border border-gray-300 rounded text-xs"
      >
        <option value="default">Default</option>
        <option value="mindmap">Mind Map</option>
        <option value="tree">Tree Layout</option>
      </select>
    </div>
  );
};

export default Sidebar;
