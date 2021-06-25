import React from 'react'
import { useEffect,useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const BrowseByFletter = () => {
    const [str,setStr] = useState('a')
    const[data,setData]=useState([])
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    useEffect(() => {
        const fetchData = () => {
          axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${str}`)
            .then((res) => setData(res.data.drinks))
            .catch((err) => console.log(err));
        };
        fetchData();
        console.log(data);
      }, [str]);

    return (
        <div>
          {alphabet.map(letter=>{
              return( 
                  <Link to ={`/cocktailCard/${str}`} onClick={()=>setStr(letter)}>{letter} /</Link>
              )
           
          })}
       {data.map((drink) => (
           <>
        
           <h1>{drink.strDrink}</h1>
           <img src={drink.strDrinkThumb}></img>
        
           </>

      ))}
        </div>
    )
}

export default BrowseByFletter
