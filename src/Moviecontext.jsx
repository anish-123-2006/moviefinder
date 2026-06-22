import {createContext,useState,useContext,useEffect} from"react"

const Moviecontext = createContext()
 export const useMoviecontext =()=>useContext(Moviecontext);

 export const MovieProvider=({children})=> {
// all the childern of <MovieProvide ><movieprovider/> can acces the below code

//children is a reserved prop when you write a component and childern is anything thats inside of the component that you rendered
const [favorites,setfavorites] = useState([]);

useEffect(()=>{
    const storedfavs=localStorage.getItem("favorites")// see if there any fav movies currently in, by using getiem


    if(storedfavs) setfavorites(JSON.parse(storedfavs));
//   it is restoring your saved data from the browser's memory (LocalStorage) back into your React application's state.
//JSON.parse() does the exact opposite: it takes that text string and turns it back into a real JavaScript array or object.
// setfavorites(...): Once the text is converted back into a proper JavaScript array, this function updates your favorites state with that data, immediately reflecting it in your app.
},[])


useEffect(()=>{
    localStorage.setItem('favorites',JSON.stringify(favorites))
    // it is saving your current favorites list into the browser's permanent memory (LocalStorage).
    // JSON.stringify() takes your favorites array (e.g., [{id: 1, title: "Inception"}]) and turns it into a giant piece of text (e.g., '[{"id":1,"title":"Inception"}]') so the browser can save it.
},[favorites])


 const addtofavorites=(movie)=>{
    setfavorites(prev=>[...prev,movie])
 }


 const removefromfavorites=(movieid)=>{
    setfavorites(prev=>prev.filter(movie=>movie.id!==movieid))
 }

 const isfavorite=(movieid)=>{
    return favorites.some(movie=>movie.id===movieid)
 }


 const value={
    favorites,
    addtofavorites   ,
    removefromfavorites,
    isfavorite
 }



return <Moviecontext.Provider value={value}>
    {children}
</Moviecontext.Provider>
// That specific block of code is essentially the "broadcasting tower" for your React Context. It takes whatever data you want to share and makes it available to all the components nested inside it.
// When you create a context using createContext(), React automatically gives you a special component called a Provider.

 }