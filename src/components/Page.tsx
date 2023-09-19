import React from "react";
import Parent from "./children/Parent";
import Child from "./children/Child";

const Page = () => {
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        
    }
  
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    console.log('Searched');
    
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number)=>{
    e.preventDefault()
    console.log(`Post ${id} is deleted`);
    

  }
  
  
    return (
    <div>
      <form>
        <input type="text" name="search" placeholder="Enter text to search"  onChange={handleChange}/>
        <button type="submit" onClick={handleSearch}>
          {" "}
          Search
        </button>
      </form>
      <form>
        <h1>Id : 1</h1>
        <p>This is first post</p>
        <button onClick={(e)=>handleDelete(e,1)}>Delete</button>
      </form>
      <form>
        <h1>Id : 2</h1>
        <p>This is second post</p>
        <button onClick={(e)=>handleDelete(e,2)}>Delete</button>
      </form>
    </div>
  );
};

export default Page;
