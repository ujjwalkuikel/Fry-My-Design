"use client";

import {
  BaseEdge,
  getBezierPath,
  getStraightPath,
  getSimpleBezierPath,
  getSmoothStepPath,
  EdgeLabelRenderer,
  EdgeProps,
} from "reactflow";
import { useState } from "react";

interface CustomEdgeProps extends EdgeProps {
  data?: {
    curveType?: string;
  };
}

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: CustomEdgeProps) => {
  const [hovered, setHovered] = useState(false);

  let edgePath = "";
  const curveType = data?.curveType || "default";

  if (curveType === "straight") {
    [edgePath] = getStraightPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
  } else if (curveType === "smoothstep") {
    [edgePath] = getSmoothStepPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
  } else {
    [edgePath] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (data?.setEdges) {
      data.setEdges((prev) => prev.filter((edge) => edge.id !== id));
    } else {
      console.warn("❌ Edge deletion failed: setEdges not found in data");
    }
  };

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          strokeWidth: 2,
          stroke: style.stroke || "#94a3b8",
          animation: style.animated ? "flow 1s linear infinite" : undefined,
        }}
      />

      <EdgeLabelRenderer>
        <div
          className="absolute z-10 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
          style={{
            transform: `translate(-50%, -50%) translate(${sourceX}px, ${sourceY}px)`,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered && (
            <div
              onClick={handleDelete}
              title="Delete edge"
              className="w-5 h-5 text-xs flex items-center justify-center cursor-pointer rounded-full bg-white border border-gray-300 shadow-sm"
            >
              ❌
            </div>
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
