const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const mongoose = require("mongoose")
const schema = require ('./schema/schema')
const cors = require('cors')
const app = express()

app.use(cors())
// mongooseが持っているconnectメソッドにURLを渡す
mongoose.connect("mongodb+srv://admin:admin@cluster0.kp61l.mongodb.net/test?retryWrites=true&w=majority")
// 接続したことがわかるように、イベントリスナーを設置
mongoose.connection.once('open',() => {
  console.log('db connected');
})
app.use('/graphql' , graphqlHTTP({
  schema,
  graphiql:true
}))
app.listen(4000,()=> {
  console.log("listening port");
})

