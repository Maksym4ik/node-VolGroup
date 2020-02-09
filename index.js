//подключение express
const express = require('express');
// подключение парсера для post запросов
const bodyParser = require('body-parser');
//конектинг express в базу app (создание сервера)
const app = express();

//использование bodyParser для парсинга в json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //для парсинга данных формnpn


//документация для main странички
const mainInfoJSON = {
  users: {
    auth: "get login info"
  },
  volunteers: "get volunteers",
  events: "get events",
  profile: {
    profileInfo: "get info about profile"
  }
}

const users = [

  {
    id: 1001,
    login: "maksym4ik",
    email: "mxfalat@gmail.com",
    isAuth: true
  },
  {
    id: 1002,
    login: "urii",
    email: "fishka128@gmail.com",
    isAuth: true
  },
  {
    id: 1003,
    login: "mhl2211",
    email: "mhl2211@gmail.com",
    isAuth: true
  }


]

app.get('/', (request, response) => {
  response.send(mainInfoJSON)
})

app.get("/users", (req, res) => {
  res.send(users)
})

app.get("/users/:id", (req,res) => {
  let user = users.find(one => {return one.id===Number(req.params.id)});
  if(!user) user={id: req.params.id, err: `404 not found in da db`}
  res.send(user);
})

app.listen(3005, () => {
  console.log('nice, we started')
})