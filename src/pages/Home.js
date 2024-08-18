// import React, { useEffect, useState } from 'react'
// import Spinner from '../components/Spinner';
// import Product from '../components/Product';
// const Home=()=>{

//   const API_URL="https://fakestoreapi.com/products"
//   const[loading,setloading]=useState(false);
//   const [posts,setposts]=useState([]);

//   async function fetchdata() {

//     setloading(true);

//     try{
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       console.log(data);  
//       setposts(data);
//       setloading(false);
//     }

//     catch{
//       console.log("error");
//     }

//     setloading(false);
    
//   }

//   useEffect(()=>{
//     fetchdata();
//   },[]);


//   return (

//     <div>  

//       {
//         loading?<Spinner/>:  // agr loading true hua to

//         posts.length>0 ?  //else 
//         (
//           <div>
//           {
//           posts.map((post)=>{
//             return(
//             <Product key={post.id} post={post}/>
//             )
//           })
//           } 
//           </div>
//         ):
//         <p> no data found </p>

//       }

// if (loading) {
//     return <Spinner />;
//   } else {
//     if (posts.length > 0) {
//       return (
//         <div>
//           {posts.map((post) => (
//             <Product key={post.id} post={post} />
//           ))}
//         </div>
//       );
//     } else {
//       return <p>No data found</p>;
//     }
//   }

//     </div>

//   )
// }
// export default Home;

                   

            //  using if else


import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import "./home.css";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("error", error);
    } 
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Conditional rendering using if-else
  if (loading) {
    return <Spinner />;

  } 
  else {
    if (posts.length > 0) {
      return (
        <div className="grid-container">
      {posts.map((post) => (
        <div className="grid-item" key={post.id}>
          <Product post={post} />
        </div>
      ))}
    </div>
      );
    } 
    else {
      return <p>No data found</p>;
    }
  }
}

export default Home;
