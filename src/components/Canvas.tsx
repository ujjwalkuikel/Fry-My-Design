"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Edge,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  Connection,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./customNode";
import CustomEdge from "./CustomEdge";
import Sidebar from "./Sidebar";
import Submit from "./Submit";

const initialEdges: Edge[] = [];

const Canvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [edgeStyle, setEdgeStyle] = useState({
    animated: true,
    directed: true,
    stroke: "#000000",
    type: "default",
  });

  const [layoutMode, setLayoutMode] = useState("default");

  // Update connected handles when edges change
  useEffect(() => {
    setNodes((nodes) =>
      nodes.map((node) => {
        const connections = {
          top: edges.some(
            (e) =>
              (e.target === node.id && e.targetHandle === "top") ||
              (e.source === node.id && e.sourceHandle === "top")
          ),
          bottom: edges.some(
            (e) =>
              (e.target === node.id && e.targetHandle === "bottom") ||
              (e.source === node.id && e.sourceHandle === "bottom")
          ),
          left: edges.some(
            (e) =>
              (e.target === node.id && e.targetHandle === "left") ||
              (e.source === node.id && e.sourceHandle === "left")
          ),
          right: edges.some(
            (e) =>
              (e.target === node.id && e.targetHandle === "right") ||
              (e.source === node.id && e.sourceHandle === "right")
          ),
        };

        return {
          ...node,
          data: {
            ...node.data,
            setNodes,
            setEdges,
            connectedHandles: connections,
          },
        };
      })
    );
  }, [edges]);

  // Node and edge type configs
  const nodeTypes = useMemo(
    () => ({
      custom: (props) => (
        <CustomNode {...props} setNodes={setNodes} setEdges={setEdges} />
      ),
    }),
    [setNodes, setEdges]
  );

  const edgeTypes = useMemo(() => ({ custom: CustomEdge }), []);

  // Handle edge connection
  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        id: `e-${connection.source}-${connection.target}-${Date.now()}`,
        type: "custom",
        animated: edgeStyle.animated,
        style: { stroke: edgeStyle.stroke },
        sourceHandle: connection.sourceHandle || "right",
        targetHandle: connection.targetHandle || "left",
        markerEnd: edgeStyle.directed
          ? {
              type: "arrowclosed",
              width: 10,
              height: 10,
            }
          : undefined,
        data: { setEdges, curveType: edgeStyle.type },
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [setEdges, edgeStyle]
  );

  // Add a new node
  const addNode = (label: string, icon: string) => {
    const id = crypto.randomUUID(); // ✅ fixed: no useState inside function
    const canvasWidth = canvasRef.current?.clientWidth || 600;
    const canvasHeight = canvasRef.current?.clientHeight || 400;

    const position = {
      x: Math.floor(Math.random() * (canvasWidth - 100)),
      y: Math.floor(Math.random() * (canvasHeight - 100)),
    };

    const newNode = {
      id,
      type: "custom",
      position,
      data: {
        label,
        icon,
        setNodes,
        setEdges,
        connectedHandles: {},
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className="flex relative min-h-screen">
      <Sidebar
        onAddNode={addNode}
        edgeStyle={edgeStyle}
        setEdgeStyle={setEdgeStyle}
        layoutMode={layoutMode}
        setLayoutMode={setLayoutMode}
      />

      <div
        ref={canvasRef}
        className="h-[80vh] w-[70vw] bg-[#fdfdfd] rounded-xl shadow-md border border-gray-200 overflow-hidden m-5 relative"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          proOptions={{ hideAttribution: true }}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>

      <Submit nodes={nodes} edges={edges} />
    </div>
  );
};

export default Canvas;
