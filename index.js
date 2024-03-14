const express = require('express')
const app = express()

  let roleModel = {
    name: "James Todd Spader",
    occupation: "Actor",
    languages: ["English"],
  };

console.log("test");

app.get('/role-model', (req,res)=>{
 res.json(roleModel);
})

app.listen(5005)


