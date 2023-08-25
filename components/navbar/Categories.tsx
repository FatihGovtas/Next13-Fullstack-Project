"use client";

import { categories } from "@/constants";
import CategoriesItem from "./CategoriesItem";
import { useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const urlItem = params?.get("category");
  console.log(urlItem)
  return (
    <div className="flex items-center gap-7">
      {categories.map((cat, i) => (
        <CategoriesItem
          key={i}
          name={cat.name}
          icon={cat.icon}
          selected={urlItem == cat.name}
        />
      ))}
    </div>
  );
};

export default Categories;
