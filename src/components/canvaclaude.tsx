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
  Panel,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./customNode";
import CustomEdge from "./CustomEdge";
import Sidebar from "./Sidebar";
import Submit from "./Submit";

// Inner component that uses ReactFlow hooks
const FlowCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedElements, setSelectedElements] = useState<{
    nodes: string[];
    edges: string[];
  }>({ nodes: [], edges: [] });

  // Edge styling options
  const [edgeStyle, setEdgeStyle] = useState({
    animated: true,
    directed: true,
    stroke: "#000000",
    type: "default",
  });

  const [layoutMode, setLayoutMode] = useState("default");
  const [isLoading, setIsLoading] = useState(false);

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
            isSelected: selectedElements.nodes.includes(node.id),
          },
        };
      })
    );
  }, [edges, selectedElements]);

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

  // Add a new node with improved positioning
  const addNode = useCallback(
    (label: string, icon: string) => {
      const id = crypto.randomUUID();
      const canvasWidth = canvasRef.current?.clientWidth || 600;
      const canvasHeight = canvasRef.current?.clientHeight || 400;

      // Find existing node positions to avoid overlap
      const existingPositions = nodes.map((node) => ({
        x: node.position.x,
        y: node.position.y,
      }));

      // Generate a position that doesn't overlap with existing nodes
      let position;
      let attempts = 0;
      const nodeWidth = 150; // approximate node width
      const nodeHeight = 80; // approximate node height

      do {
        position = {
          x: Math.floor(Math.random() * (canvasWidth - nodeWidth)),
          y: Math.floor(Math.random() * (canvasHeight - nodeHeight)),
        };

        // Check if this position is far enough from existing nodes
        const isOverlapping = existingPositions.some(
          (pos) =>
            Math.abs(pos.x - position.x) < nodeWidth &&
            Math.abs(pos.y - position.y) < nodeHeight
        );

        if (!isOverlapping) break;
        attempts++;
      } while (attempts < 10);

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

      // After adding node, we can use the fitView function from the instance
      setTimeout(() => {
        const reactFlowInstance =
          document.querySelector(".react-flow")?.reactFlowInstance;
        if (
          reactFlowInstance &&
          typeof reactFlowInstance.fitView === "function"
        ) {
          reactFlowInstance.fitView({ padding: 0.2 });
        }
      }, 50);
    },
    [nodes, setNodes]
  );

  // Handle selection changes
  const onSelectionChange = useCallback(({ nodes, edges }) => {
    setSelectedElements({
      nodes: nodes.map((node) => node.id),
      edges: edges.map((edge) => edge.id),
    });
  }, []);

  // Handle key presses for shortcuts
  const handleKeyDown = useCallback(
    (event) => {
      // Delete selected elements with Delete key
      if (event.key === "Delete" || event.key === "Backspace") {
        if (
          selectedElements.nodes.length > 0 ||
          selectedElements.edges.length > 0
        ) {
          setNodes((nodes) =>
            nodes.filter((node) => !selectedElements.nodes.includes(node.id))
          );
          setEdges((edges) =>
            edges.filter((edge) => !selectedElements.edges.includes(edge.id))
          );
          setSelectedElements({ nodes: [], edges: [] });
        }
      }
    },
    [selectedElements, setNodes, setEdges]
  );

  // Add and remove event listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Apply different layout algorithms
  const applyLayout = useCallback(() => {
    if (nodes.length === 0) return;

    setIsLoading(true);

    // Simple layout implementations
    if (layoutMode === "horizontal") {
      const newNodes = [...nodes];
      const spacing = 200;

      newNodes.forEach((node, index) => {
        node.position = {
          x: index * spacing,
          y: 100,
        };
      });

      setNodes(newNodes);
    } else if (layoutMode === "vertical") {
      const newNodes = [...nodes];
      const spacing = 150;

      newNodes.forEach((node, index) => {
        node.position = {
          x: 100,
          y: index * spacing,
        };
      });

      setNodes(newNodes);
    } else if (layoutMode === "circle") {
      const newNodes = [...nodes];
      const centerX = (canvasRef.current?.clientWidth || 600) / 2;
      const centerY = (canvasRef.current?.clientHeight || 400) / 2;
      const radius = Math.min(centerX, centerY) * 0.8;

      newNodes.forEach((node, index) => {
        const angle = (index / newNodes.length) * 2 * Math.PI;
        node.position = {
          x: centerX + radius * Math.cos(angle) - 75, // Offset by half node width
          y: centerY + radius * Math.sin(angle) - 40, // Offset by half node height
        };
      });

      setNodes(newNodes);
    }

    setTimeout(() => {
      const reactFlowInstance =
        document.querySelector(".react-flow")?.reactFlowInstance;
      if (
        reactFlowInstance &&
        typeof reactFlowInstance.fitView === "function"
      ) {
        reactFlowInstance.fitView({ padding: 0.2 });
      }
      setIsLoading(false);
    }, 100);
  }, [layoutMode, nodes, setNodes]);

  // Apply layout when mode changes
  useEffect(() => {
    if (layoutMode !== "default" && nodes.length > 0) {
      applyLayout();
    }
  }, [layoutMode, applyLayout]);

  // Export flow to JSON
  const exportFlow = useCallback(() => {
    const flowData = {
      nodes: nodes.map(({ id, type, position, data }) => ({
        id,
        type,
        position,
        data: {
          label: data.label,
          icon: data.icon,
        },
      })),
      edges: edges.map(
        ({
          id,
          source,
          target,
          sourceHandle,
          targetHandle,
          type,
          animated,
          style,
        }) => ({
          id,
          source,
          target,
          sourceHandle,
          targetHandle,
          type,
          animated,
          style,
        })
      ),
    };

    const dataStr = JSON.stringify(flowData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = `flow-diagram-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  }, [nodes, edges]);

  return (
    <div className="flex relative min-h-screen">
      <Sidebar
        onAddNode={addNode}
        edgeStyle={edgeStyle}
        setEdgeStyle={setEdgeStyle}
        layoutMode={layoutMode}
        setLayoutMode={setLayoutMode}
      />

      {/* <Sidebar onAddNode={addNode} /> */}

      <div
        ref={canvasRef}
        className="h-[80vh] w-[70vw] bg-[#fdfdfd] rounded-xl shadow-md border border-gray-200 overflow-hidden m-5 relative"
      >
        {isLoading && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onSelectionChange={onSelectionChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          proOptions={{ hideAttribution: true }}
          deleteKeyCode={null} // Disable built-in delete to use custom implementation
        >
          <Background />
          <Controls />
          <MiniMap />
          <Panel
            position="top-right"
            className="bg-white p-2 rounded shadow-md"
          >
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const reactFlowInstance =
                    document.querySelector(".react-flow")?.reactFlowInstance;
                  if (
                    reactFlowInstance &&
                    typeof reactFlowInstance.fitView === "function"
                  ) {
                    reactFlowInstance.fitView({ padding: 0.2 });
                  }
                }}
                className="px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded text-sm"
                title="Fit view"
              >
                Fit View
              </button>
              <button
                onClick={applyLayout}
                className="px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded text-sm"
                title="Apply layout"
              >
                Apply Layout
              </button>
              <button
                onClick={() => {
                  setNodes([]);
                  setEdges([]);
                }}
                className="px-2 py-1 bg-red-100 hover:bg-red-200 rounded text-sm"
                title="Clear canvas"
              >
                Clear
              </button>
            </div>
          </Panel>
        </ReactFlow>
      </div>

      <Submit nodes={nodes} edges={edges} />
    </div>
  );
};

// Wrapper component that provides ReactFlow context
const Canvas = () => {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
};

export default Canvas;
