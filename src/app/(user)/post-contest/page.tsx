import Header from "./Components/Header";
import PostCard from "./Components/PostCard";

export default function Post(){


    const DATA = [
        {
            // profile : "",
            post : "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            // likes : "",
            comment : "Exciting reunion ahead!",
        },
        {
            // profile : "",
            post : "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            // likes : "",
            comment : "Exciting reunion ahead!",
        },
    ]

    return (
        <div className="h-screen">
            <Header/>
                {
                    DATA.map((value , index) => (
                        <PostCard {...value} key={index}/>
                    ))
                }
        </div>
    );
}