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

export const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <span
      className="inline-block bg-[#64ffda]/10 px-3 py-1.5 text-xs font-medium text-[#64ffda] mr-2 mb-2 rounded-full"
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
