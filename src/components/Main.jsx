import { useState, useEffect } from "react";

const Main = () => {
    // imposto arry vuoto
    const [posts, setPosts] = useState([]);

    // imposto chiamata api
    const fetchPosts = () => {
        fetch("http://localhost:3000/posts")
            .then((res) => res.json())
            .then(setPosts)

            .catch((err) => console.error(err))
    };

    useEffect(fetchPosts, []);

    return (
        <main>
            <div className="margin-60 card-flex">
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id} className="card">
                                <figure>
                                    <img src={post.image} alt={post.title} />
                                </figure>

                                <h3>{post.title}</h3>

                                <p>{post.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
};

export default Main;