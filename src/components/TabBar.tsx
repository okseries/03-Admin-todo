"use client";

import { useEffect, useState } from "react";
import {
  getCookie,
  getCookies,
  setCookie,
  deleteCookie,
  hasCookie,
  useGetCookies,
  useSetCookie,
  useHasCookie,
  useDeleteCookie,
  useGetCookie,
} from 'cookies-next/client';



interface TabBarProps {
  currentTab?: number;
  tabBarOptions?: number[];
}


const getGridColsClass = (count: number) => {
  const map: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12',
  };
  return map[count] || 'grid-cols-1';
};

export const TabBar = ({ tabBarOptions = [1, 2, 3, 4, 5, 6, 7], currentTab = 1 }: TabBarProps) => {

  const [selected, setSelected] = useState(currentTab);
  

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab', tab.toString())
  }


  return (
    <div
      className={`grid w-full ${getGridColsClass(tabBarOptions.length)} space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabBarOptions.map((option) => (
        <div key={option}>
          <input checked={selected === option} onChange={()=>{}} type="radio" id={option.toString()} className="peer hidden" />
          <label onClick={()=>onTabSelected(option)} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white hover:bg-blue-300 transition-colors duration-200">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};