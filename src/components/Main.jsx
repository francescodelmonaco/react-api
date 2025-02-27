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


    // funzione per eliminare articolo nella lista
    const removePost = (post) => {
        const arrayClone = posts.filter((_, index) => index !== post);
        return setPosts(arrayClone);
    };

    return (
        <main>
            <table className="margin-60">
                {/* tabel header */}
                <tr>
                    <th>
                        <h3>Title</h3>
                    </th>
                    <th>
                        <h3>Image</h3>
                    </th>
                    <th>
                        <h3>Description</h3>
                    </th>
                    <th></th>
                </tr>

                {/* table data rows */}
                {
                    posts.map((post, index) => {
                        return (
                            <tr key={post.id}>
                                <td>
                                    <span>{post.title}</span>
                                </td>
                                <td>
                                    <figure>
                                        <img src={post.image} alt={post.title} />
                                    </figure>
                                </td>
                                <td>
                                    <p>{post.content}</p>
                                </td>
                                <td>
                                    <button onClick={() => removePost(index)}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>

            {/* cards */}
            {/* <div className="margin-50 card-flex">
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
            </div> */}
        </main>
    )
};

export default Main;