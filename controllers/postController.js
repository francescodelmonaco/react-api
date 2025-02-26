import { posts } from "../data/posts.js";

function index(req, res) {
    res.json(posts);
};

function show(req, res) {
    res.json(posts[req.params.id]);
};

function store(req, res) {
    // Creiamo un nuovo id incrementando l'ultimo id presente
    const newId = posts[posts.length - 1].id + 1;

    // Creiamo un nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        image: req.body.image,
        tags: req.body.tags
    };

    // Aggiungiamo il nuovo post all'array
    posts.push(newPost);

    // controlliamo
    console.log(posts);

    // Restituiamo lo status corretto e la pizza appena creata
    res.status(201);
    res.json(newPost);
};

function update(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // Piccolo controllo
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    };

    // Aggiorniamo il post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // Controlliamo l'array
    console.log(posts);

    // Restituiamo il post appena aggiornato
    res.json(post);
};

function modify(req, res) {
    // copiamo la logica del modify
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const postDaEliminare = posts.find(post => post.id === id);

    // Piccolo controllo
    if (!postDaEliminare) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    };

    // Rimuoviamo la pizza dal menu
    posts.splice(posts.indexOf(postDaEliminare), 1);

    console.log(posts);

    // Restituiamo lo status corretto
    res.sendStatus(204);
};

// esportiamo tutto
export default { index, show, store, update, modify, destroy };