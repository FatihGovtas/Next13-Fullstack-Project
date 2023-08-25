"use client"

import { CategorySelectProps } from "@/types"

const CategorySelect = ({name, icon: Icon, selected, onClick}: CategorySelectProps) => {
  return (
    <div className={`${selected ? "text-black" : "text-gray-500"} cursor-pointer flex flex-col items-center`} onClick={()=>onClick(name)}>
        <Icon size={25}/>
        <div className="text-lg tracking-wider">
            {name}
        </div>
    </div>
  )
}

export default CategorySelect