import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";

const PostPage = () => {
    const { posts, fetchData } = useContext(PostContext);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h1>Elenco posts</h1>
                        <ul className="list-group my-5">
                            {posts === null ? (
                                <h2>Caricamento...</h2>
                            ) : (
                                posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="list-group-item d-flex justify-content-between"
                                    >
                                        <span>{post.title}</span>
                                        <Link
                                            className="btn btn-success"
                                            to={`/dettaglio-post/${post.id}`}
                                        >
                                            Vedi dettaglio
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostPage;
