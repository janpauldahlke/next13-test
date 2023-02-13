import { seed as superSeed } from "@/seed"
import { useEffect, useState } from "react";

//interfacing type support on state
export interface ILoremData {
  text: string;
 }

//moving this outside prevents infinite loop
const s = superSeed();

//we might want Map.new() for this, to be able to use the same seed for multiple components
//begins function

export default function Entry() {
  const [seed, setSeed] = useState<ILoremData | undefined>(undefined);
  useEffect(() => {
    setSeed(s as ILoremData);
   }, [seed]);
  if (!seed) return (
    <div>Loading...</div>
  )
  else { 
    return (
      <>
        <div>{ seed.text } </div>
      </>
    )
  }
}
