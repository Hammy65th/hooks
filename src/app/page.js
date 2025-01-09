"use client";

import useCounter from "@/hooks/useCounter";
import useWindowWidth from "@/hooks/windowWitdth";
import useOnlineStatus from "@/hooks/onlineStatus";
import Styles from "./page.module.css"

export default function Home() {

  const { count, increment, decrement } = useCounter(5);

  const width = useWindowWidth();

  const breakPoint = 620;

  const isOnline = useOnlineStatus();

  //return <p>Du er {isOnline ? 'Online' : 'Offline'}</p>
  //return width < breakPoint ? console.log('mobile view'): console.log('desktop view');
  
  return (
    <div>
      <p>Tæller: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  )

  
}
