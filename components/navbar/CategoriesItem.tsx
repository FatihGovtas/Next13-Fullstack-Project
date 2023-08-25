"use client";

import { CategoriesItemProps } from "@/types";
import { useRouter } from "next/navigation";

const CategoriesItem = ({
  name,
  icon: Icon,
  selected,
}: CategoriesItemProps) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`?category=${name}`)} className={`${selected ? "border-b-2 border-black" : ""} pb-2 flex items-center gap-2 cursor-pointer`}>
      <Icon size={20} />
      <div className="tracking-wider">{name}</div>
    </div>
  );
};

export default CategoriesItem;
