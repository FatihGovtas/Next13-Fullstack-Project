"use client";

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import UserMenuItem from "./UserMenuItem";
import { useAppDispatch } from "@/redux/hooks";
import {
  elementModalFunc,
  loginModalFunc,
  registerModalFunc,
} from "@/redux/modalSlice";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

const UserMenu = ({ user }: { user: User | any | undefined }) => {
  console.log(user);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => setOpenMenu(!openMenu)}
      className="relative flex items-center gap-2 cursor-pointer"
    >
      <div className="text-gray-500 text-sm">{user?.name}</div>
      <GiHamburgerMenu size={25} />
      <Image
        src={
          user?.image ||
          "https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png"
        }
        width={40}
        height={40}
        alt="user_logo"
        className="rounded-full"
      />
      {openMenu && (
        <div className="absolute bg-white shadow-lg shadow-gray-500 w-[150px] top-16 right-0">
          {user ? (
            <>
              <UserMenuItem
                name="Create Listing"
                onClick={() => {
                  dispatch(elementModalFunc());
                }}
              />
              <UserMenuItem name="Favorited" onClick={() => {}} />
              <UserMenuItem
                name="Sign Out"
                onClick={() => {
                  signOut();
                }}
              />
            </>
          ) : (
            <>
              <UserMenuItem
                name="Sign In"
                onClick={() => {
                  dispatch(loginModalFunc());
                }}
              />
              <UserMenuItem
                name="Sign Up"
                onClick={() => {
                  dispatch(registerModalFunc());
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
