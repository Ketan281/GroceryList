import React from "react";

const GroceryList = ({title,status,id,handleDelete}) => {
    return (<div>
<h1>{title}</h1>
<button onClick={handleDelete(id)}>Delete</button>
    </div>)
}
export {GroceryList};