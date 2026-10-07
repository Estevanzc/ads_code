import FormularioComentario from "./FormularioComentario"

function Publicacao({ post, like, addComment }) {
    return (
        <>
            <li>Autor: {post.autor}</li>
            <li>Mensagem: {post.mensagem}</li>
            <li>Curstidas: {post.curtidas} <button onClick={() => like(post.id)}>Add Curtida</button></li>
            <li>Número de comentários: {post.comentarios.length}</li>
            <li>Comentários: <ul>{post.comentarios.map(comment => (<li>{comment}</li>))}</ul></li>
            <FormularioComentario id={post.id} addComment={addComment} />
        </>
    )
}

export default Publicacao