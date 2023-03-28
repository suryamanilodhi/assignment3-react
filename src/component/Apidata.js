
import{useEffect, useState} from "react"
import axios from "axios" 

function ApiData(params){  
   const[detail,setdetail]=useState([]) 
   const[search,setsearch]=useState("")

   useEffect(() =>{
      getCases()
    }, []);

   const getCases=async()=>{ 
     
            try {
               let response=await axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war') 
               // console.log('response',response); 
               setdetail(response.data.Search) 
               // setfilter(response.data.Search)
               console.log(response.data.Search)     
            } catch (error) {
               console.log(error)
            }
   }

   
   return(
      <>
  
  <div> 
       <input className='searchbar' type="text" onChange={(e)=>setsearch(e.target.value)}  placeholder="Search for movie title"></input>   
       </div>

         <div className="bigbox">
          {
            detail.filter((e)=>e.Title.toLowerCase().includes(search)).map((e)=>{
            return(
            <div className="grid_div">
             <div className="img_div">
               <img src={e.Poster} ></img>
               </div> 
             <span> {e.Title}{e.Year}</span>
             </div>   
            )   
            })
          }
          
          </div>
     
      </>
   )
      
}
export default ApiData;
