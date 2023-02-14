import { seed as superSeed } from "@/seed"
import { useEffect, useState } from "react";


// we would need to consume an API here, for this example we will use a seed so it won't work
// //setting up query client
// function makeQueryClient() {
//   const fetchMap = new Map<string, Promise<any>>();
//   return function queryClient<QueryResult>(
//     name: string,
//     query: () => Promise<QueryResult>
//   ): Promise<QueryResult> {
//     if (!fetchMap.has(name)) {
//       fetchMap.set(name, query());
//     }
//     return fetchMap.get(name)!;
//   };
// }


// //creating query client
// const queryClient = makeQueryClient();

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
