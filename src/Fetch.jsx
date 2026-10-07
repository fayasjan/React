import { useState,useEffect } from "react";

function FetchAnApi(){


    const [posts,setPosts] = useState ([])

    useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => setPosts(posts)) //change it
},[])



return(

<>
<h1>Fetch API data</h1>

{posts.map((post) => (
<h1 key={post.id}>
    {post.id} - {post.body}
</h1>

))}    
 
</>

)
}

export default FetchAnApi;