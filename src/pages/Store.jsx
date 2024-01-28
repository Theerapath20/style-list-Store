

import Card from "../compomemt-store/Card";
import data from "../compomemt-store/data.json"
import { useState } from "react";

function Store() {
  
  const allCategory = ['all', ...new Set(data.map((item) => item.category))]
  
   const [category , setCategory] = useState(allCategory)
   const [menu,setMenu] = useState(data)
   const [value,setValue] = useState(0)

   const filterItem = (category) =>{
    if(category === 'all'){
      return setMenu(data)
    }
    const newItem = menu.filter((item) => item.category === category)
    setMenu(newItem);
   }
  
 return (
   <>
     <div className="text-center text-4xl bg-yellow-50 p-5 ">SHOP</div>
     <div className="flex flex-row justify-center flex-wrap space-x-3 bg-yellow-50">
       {category.map((category, i) => {
         return (
           <div>
             <button
               className={`m-3 p-2 hover:underline hover:underline-offset-4 decoration-sky-500   ${
                 i === value &&
                 `border rounded-lg bg-yellow-600 text-white hover:no-underline mx-2 `
               }`}
               key={i}
               onClick={() => {
                 filterItem(category);
                 setValue(i);
               }}
             >
               {category}
             </button>
           </div>
         );
       })}
     </div>
      <Card menu={menu} />
     
   </>
 );
}

export default Store;
