import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="flex shadow-md sticky z-50 top-0">
      <div className="relative w-20 h-10 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src="/a1.png" layout="fill" />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px] shadow-lg p-2 border border-gray-300">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 hidden ml-2 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 py-1 px-3 border-gray-300 border-2 rounded-sm shadow-lg">
        <SearchIcon className="h-6 w-6 text-rose-900 bg-#ddd outline-none" />
        <input
          type="text"
          className="bg-transparent"
          placeholder="Başlık Ara..."
        />
        <button type="submit" hidden className="bg-gray-300" />
      </form>

      <div className="item-center hidden space-x-2 text-gray-500 mx-2 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-200" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="mr-2 ml-1 flex item-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-200 p-2 mr-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <FaUserCircle color="grey" size={20} />
        </div>
        <p className="text-gray-400" >Giriş Yap</p>
      </div>
    </div>
  );
}

export default Header;
