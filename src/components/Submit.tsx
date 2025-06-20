"use client";

import React from "react";
import { Node, Edge } from "reactflow";

interface SubmitProps {
  nodes: Node[];
  edges: Edge[];
}

const Submit: React.FC<SubmitProps> = ({ nodes, edges }) => {
  const handleSubmit = () => {
    const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n.data.label]));

    const adjList: Record<string, string[]> = {};
    edges.forEach((edge) => {
      if (!adjList[edge.source]) adjList[edge.source] = [];
      adjList[edge.source].push(edge.target);
    });

    const targets = new Set(edges.map((e) => e.target));
    const sources = nodes.filter((n) => !targets.has(n.id));

    const paths: string[][] = [];

    const dfs = (nodeId: string, path: string[]) => {
      path.push(nodeMap[nodeId]);
      if (!adjList[nodeId] || adjList[nodeId].length === 0) {
        paths.push([...path]);
      } else {
        for (const next of adjList[nodeId]) {
          dfs(next, path);
        }
      }
      path.pop();
    };

    sources.forEach((n) => dfs(n.id, []));

    console.log("Flow Paths:");
    paths.forEach((p) => console.log(p.join(" -> ")));
    alert("Check console for flow output 🚀");
  };

  return (
    <button onClick={handleSubmit} style={{ padding: 8, margin: 20 }}>
      Submit 🚀
    </button>
  );
};

export default Submit;
