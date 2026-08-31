import Publicacao from "./Publicacao"

function Feed({ posts, setPosts }) {
    function like(id) {
        setPosts(posts.map(post => post.id == id ? { ...post, curtidas: post.curtidas + 1 } : post))
    }
    function addComment(id, comment) {
        if (comment.trim()) {
            setPosts(posts.map(post => post.id == id ? { ...post, comentarios: [...post.comentarios, comment] } : post))
        }
    }
    return (
        <ul>
            {posts.map(post => (
                <>
                <Publicacao key={post.id} post={post} like={like} addComment={addComment} />
                <br />
                </>
            ))}
        </ul>
    )
}

export default Feed