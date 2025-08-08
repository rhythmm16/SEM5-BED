// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res) => {
//         console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// }
async function getCommentData() {
    try{
        let response=await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(response.data);
    }catch(error){
        console.log(error.message);
    }
}
getCommentData();

function adduser(email,password){
    axios.post('/user', {
        email: email,
        password: password
  })

}