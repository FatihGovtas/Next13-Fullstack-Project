"use client"

import { UserMenuItemProps } from "@/types"

const UserMenuItem = ({name, onClick} : UserMenuItemProps) => {
  return (
    <div onClick={onClick} className="text-lg px-3 py-2 hover:bg-gray-100 cursor-pointer">{name}</div>
  )
}

export default UserMenuItem