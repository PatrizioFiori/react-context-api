# react-context-api
*27/01/2025*

Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.
- Partiamo con il definire la lista dei post all'interno di App.jsx
- Creiamo un component PostsPage.jsx che conterrà titolo e componente PostsList.jsx che mostra la lista di tutti i post
 - Creiamo un file per definire il nostro Context ed esportiamolo
 - Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione

Facciamo in modo che il componente PostsList.jsx recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.

La struttura dell’App deve essere
App.jsx -> PostsPage.jsx -> PostsList.jsx -> PostCard.jsx