import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import {v4 as uuid} from "uuid";

const Grocery = () =>{
    const [data, setData] = React.useState([]);

    const handleAdd = (title) =>{
        const payload = {
            title,
            status:false,
            id: uuid()
        };
        setData([...data, payload]);
    };

    const handleDelete = (id) =>{
        const updatedData = data.filter((item)=> item.id !== id);
        setData(updatedData);
    };
    return(
<>
<GroceryInput handleAdd={handleAdd} />
{ data.map((item)=>(
       <GroceryList 
       {...item}
       key={item.id} 
       handleDelete={handleDelete}/>
    ))
}

</>

    );
};
export default Grocery;


