"use client";

import { useState } from "react";
import { Handle } from "reactflow";

const CustomNode = ({ id, data, selected, setNodes, setEdges }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tempLabel, setTempLabel] = useState(data.label);

  const handleDoubleClick = () => {
    setTempLabel(data.label);
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    data.setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, label: tempLabel } }
          : node
      )
    );
  };

  const handleDelete = () => {
    data.setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    data.setEdges((prevEdges) =>
      prevEdges.filter((edge) => edge.source !== id && edge.target !== id)
    );
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      className={`p-[6px] rounded-md bg-white text-center min-w-[60px] max-w-[100px] relative text-[11px] transition-all duration-200 ease-in-out shadow-sm cursor-pointer border ${
        selected ? "border-blue-500" : "border-gray-300"
      } ${hovered ? "shadow-[0_0_4px_rgba(0,123,255,0.6)]" : ""}`}
    >
      {hovered && (
        <button
          onClick={handleDelete}
          className="absolute -top-1.5 -right-1.5 bg-white border border-gray-300 rounded-full w-4 h-4 text-[10px] leading-[14px] text-center p-0 cursor-pointer text-gray-500 shadow-sm"
          title="Delete node"
        >
          ❌
        </button>
      )}

      <img
        src={data.icon}
        alt={data.label}
        className="w-[20px] h-[20px] block mx-auto"
      />

      <div className="relative h-[10px] mt-0">
        {!isEditing && (
          <div className="text-[8px] overflow-hidden text-ellipsis whitespace-nowrap">
            {data.label}
          </div>
        )}
        {isEditing && (
          <input
            value={tempLabel}
            onChange={(e) => setTempLabel(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === "Enter" && handleBlur()}
            autoFocus
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[8px] px-[4px] py-[1px] border border-gray-300 rounded w-[90%] h-full outline-none text-center bg-gray-50 shadow-inner"
          />
        )}
      </div>

      {/* Handles */}
      <Handle
        type="source"
        position="right"
        id="right"
        style={{
          background: data.connectedHandles?.right ? "#000" : "#eee",
          width: 4,
          height: 4,
          borderRadius: "50%",
          border: "1px solid #fff",
        }}
      />
      <Handle
        type="target"
        position="left"
        id="left"
        style={{
          background: data.connectedHandles?.left ? "#000" : "#eee",
          width: 4,
          height: 4,
          borderRadius: "50%",
          border: "1px solid #fff",
        }}
      />
      <Handle
        type="source"
        position="top"
        id="top"
        style={{
          background: data.connectedHandles?.top ? "#000" : "#eee",
          width: 4,
          height: 4,
          borderRadius: "50%",
          border: "1px solid #fff",
        }}
      />
      <Handle
        type="target"
        position="bottom"
        id="bottom"
        style={{
          background: data.connectedHandles?.bottom ? "#000" : "#eee",
          width: 4,
          height: 4,
          borderRadius: "50%",
          border: "1px solid #fff",
        }}
      />
    </div>
  );
};

export default CustomNode;
