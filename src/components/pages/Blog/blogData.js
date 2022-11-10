export const blogs = [
    {
        id:1112230,
        question:`Difference between SQL and NoSQL ?`,
        ans:`
        Type: SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. Language: SQL databases defines and manipulates data based structured query language (SQL) on the otherhand NOSQL database have dynamic schema for unstructured data. That means can be stored both document-oriented, column-oriented, graph-based or organized as a KeyValue store. Scalability: SQL are vericaly scalable and NOSQL are horizontally scalable. Ex: Squl: MySQL, PostgreSQL NOSQL: MongoDB, GraphQL`

    },
    {
        id:1112233,
        question:`What is JWT, and how does it work`,
        ans:`
        JWT stands for json web token. It's an open standard used to share security information between two parties — a client and a server. When user get login to the website then it's pass a token from client site to the sever. token contain three parts the header , payload and the signature. If Header and payload matched with the signatured then it will send the information from server.   
        `

    },
    {
        id:122210025,
        question:`What is the difference between javascript and NodeJS ?`,
        ans:`
        Javascript: Javascript is a programming language that is used for writing scripts on the website. It's basically used on the client-side. It's basically used in fronted to create interaction. On the otherhand NodeJS is a Javascript runtime environment. It is mostly used on the server-side. Don't have capability to manupulate dom.
        `

    },
    {
        id:122210027,
        question:`How does NodeJS handle multiple requests at the same time ?`,
        ans:`
        NodeJS receives multiple client requests and places them into EventQueue. It is built with the concept of event-driven architecture. It has it's own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads modul
        `

    },

]