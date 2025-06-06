import React from "react";

const Submit = ({ nodes, edges }) => {
  const handleSubmit = () => {
    // Build a map of node id to label
    const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n.data.label]));

    // Build adjacency list
    const adjList = {};
    edges.forEach((edge) => {
      if (!adjList[edge.source]) adjList[edge.source] = [];
      adjList[edge.source].push(edge.target);
    });

    // Find starting node(s) (no incoming edges)
    const targets = new Set(edges.map((e) => e.target));
    const sources = nodes.filter((n) => !targets.has(n.id));

    const paths = [];

    const dfs = (nodeId, path) => {
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

    // Print paths
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
