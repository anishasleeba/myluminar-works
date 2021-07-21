//localStorage.setItem(key,value)
//to add a key value pai we use setitem
//localStorage.removeItem(key)   for removing item
//localStorage.clear()
// localStorage.setItem("accnt_num",1234);
// localStorage.setItem("pwd",657658);
// for(let i=0;i<localStorage.length;i++){
//     let print=localStorage.key(i);
//     let val=localStorage.getItem(print);
//     console.log(print+" " + val);
// }
//localStorage.clear();
//javascript object notation JSON to transfer the data format, others are XML
var user={username:"user2",password:"password1",name:"ram",balance:7890};
localStorage.setItem(user.username,JSON.stringify(user))
