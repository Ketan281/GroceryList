import React from "react";

const GroceryInput = ({handleAdd}) => {

const [title, setTitle] = React.useState("");
return (
<>
<div>
<input
placeholder="Add Grocery"
value={title}
onChange= {(e) => setTitle(e.target.value)}
/>
<button 
onClick={()=>{
    handleAdd(title);
    setTitle("");
}}
>Add
</button>
</div>
</>

);

};

export {GroceryInput};