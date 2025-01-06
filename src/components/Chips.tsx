import React from "react";

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "databases"
  | "architectures"
  | "AI"
  | "tools";

interface ChipProps {
  text: string;
  category: SkillCategory;
}

const categoryColors: Record<SkillCategory, { bg: string; text: string }> = {
  languages: { bg: "bg-blue-500", text: "text-blue-500" },
  frameworks: { bg: "bg-green-500", text: "text-green-500" },
  databases: { bg: "bg-cyan-500", text: "text-cyan-500" },
  architectures: { bg: "bg-yellow-500", text: "text-yellow-500" },
  AI: { bg: "bg-lime-500", text: "text-lime-500" },
  tools: { bg: "bg-emerald-500", text: "text-emerald-500" },
};

export const Chip: React.FC<ChipProps> = ({ text, category }) => {
  const { bg, text: textColor } = categoryColors[category];
  return (
    <span
      className={`inline-block ${bg} bg-opacity-30 px-3 py-1.5 text-xs font-medium ${textColor} mr-2 mb-2 rounded-full`}
    >
      {text}
    </span>
  );
};

interface ChipListProps {
  items: string[];
  category: SkillCategory;
}

export const ChipList: React.FC<ChipListProps> = ({ items, category }) => (
  <div className="flex flex-wrap">
    {items.map((item, index) => (
      <Chip key={index} text={item} category={category} />
    ))}
  </div>
);
