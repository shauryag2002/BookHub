import axios from "axios";
export async function getAllBooks () {

    let res =  await axios.get('http://localhost:5000/book');
    let posts = res.data;
    // console.log(posts)
    // return  posts.map((post, i) => {
    //   return (
    //     <li key={i} className="list-group-item">{post.name}</li>
    //   );
    // });
    return posts;
}
export async function getBook () {
    let inp=document.getElementById('inp');
    let res =  await axios.get(`http://localhost:5000/book/${inp.value}`);
    let posts = res.data;
    // console.log(posts)
    // return  posts.map((post, i) => {
    //   return (
        //     <li key={i} className="list-group-item">{post.name}</li>
        //   );
        // });
        return posts;
    }
    export async function deleteBook (id) {
        
        // let inp=document.getElementById('inp');
        let res =  await axios.delete(`http://localhost:5000/book/${id}`);
        let posts = res.data;
        // console.log(posts)
    // return  posts.map((post, i) => {
    //   return (
    //     <li key={i} className="list-group-item">{post.name}</li>
    //   );
    // });
    return posts;
}
export async function createBook () {

    let name=document.getElementById("name").value
    let image=document.getElementById("image").value
    let author=document.getElementById("author").value
    let price=document.getElementById("price").value
    let desc=document.getElementById("desc").value
    let res =  await axios.post('http://localhost:5000/book',{
        name,
        image,
        author,
        price,
        desc
    });
    let posts = res.data;
    // console.log(posts)
    // return  posts.map((post, i) => {
    //   return (
    //     <li key={i} className="list-group-item">{post.name}</li>
    //   );
    // });
    return posts;
}
export async function updateBook (id) {

    let name=document.getElementById("name").value
    let image=document.getElementById("image").value
    let author=document.getElementById("author").value
    let price=document.getElementById("price").value
    let desc=document.getElementById("desc").value
    let res =  await axios.put(`http://localhost:5000/book/${id}`,{
        name:String(name),
        image:String(image),
        author:String(author),
        price:Number(price),
        desc:String(desc)
    });
    let posts = res.data;
    // console.log(posts)
    // return  posts.map((post, i) => {
    //   return (
    //     <li key={i} className="list-group-item">{post.name}</li>
    //   );
    // });
    return posts;
}
// exports.createBook=createBook;
// exports.updateBook=updateBook;
// exports.getBook=getBook;
// exports.getAllBooks=getAllBooks;
// exports.deleteBook=deleteBook;