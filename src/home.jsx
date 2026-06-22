import Moviecard from "./Moviecard";
import React,{useState,useEffect} from "react";
import"./css/home.css"
import { searchMovies, getPopularmovies } from "./services/api";
function Home(){

const [searchquery,setsearchquery]=useState("");
const[movies,setMovies] = useState([]);
const[error,setError] = useState(null);
const[loading,setLoading] = useState(true);

useEffect(()=>{
    const loadPopularMovies= async ()=>{
    try{
        const popularMovies= await getPopularmovies();
        setMovies(popularMovies);
    } catch(err){
        console.log(err);
        setError("failed to load movies...")
    }
    finally{
        setLoading(false);
    }
    }
    loadPopularMovies();

},[])


const handlesearch= async(e)=>{
    e.preventDefault();
if (!searchquery.trim()) return;
// trim() removes spaces from the beginning and end.
// because after trim() they become "", and !"" is true.
if(loading) return ;// wont allow to search if we already searching for something else
setLoading(true)
try{
const searchResults = await searchMovies(searchquery);
setMovies(searchResults);
setError(null);
}
catch(err){
    setError("failed to search movies...")
    console.log(err);
}
finally{
    setLoading(false)
}

};



    return(<>
    <div className="home">
<form onSubmit={handlesearch} className="search-form">

<input type="text" placeholder="serach for movies..." className="search-input" 
value={searchquery} 
onChange={(e)=>setsearchquery(e.target.value)} 
/>
<button type="submit" className="search-button">search</button>
</form>


        <div className="movies-grid">
            {movies.map((movie)=>
            movie.title.toLowerCase().startsWith(searchquery) &&(
                 <Moviecard movie={movie} key={movie.id}/>
            )
            )}
        </div>
    </div>
    </>)
}
export default Home;