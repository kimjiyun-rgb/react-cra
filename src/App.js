import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import Header from './Header';
import Nav from './Nav';
import { useState } from 'react';


function Avatar(props)
{
  const state = useState();
  const score = state[0];
  const setScore = state[1];

  return (
    <img className="avatar" src={props.author.avatarUrl}
      alt={props.author.name} width='100px' />
  );
}
function UserInfo(props)
{
  return (
    <div className="user-info">
      <Avatar author={props.author} />
      <div className="user-info-name">
        {props.author.name}
      </div>
    </div>
  );
}
function Comment(props)
{
  return (
    <div className="comment">
      <UserInfo author={props.author} />
      <div className="comment-text" style={{
        fontSize: '2rem',
        color: 'red'
      }}>
        {props.text}
      </div>
      <div className={styles.commentdate}>
        {props.date}
      </div>
    </div>
  );
}

const arr = [1, 2, 3];
const result2 = [];
for (let i = 0; i < arr.length; i++)
{
  result2.push(arr[i]);
}

const result = arr.map((v) =>
{
  return 100;
});
console.log(result);

setInterval(() => { });
navigator.geolocation.getCurrentPosition(() => { })

function run(data)
{

}

run(100);

function App()
{
  const list = ["HTML", "CSS", "JavaScript"];
  return (
    <BrowserRouter>
      <div className="App">
        <Header a="1" b="3" title={"WEB"} content={"WWW"} />
        <Nav list={list} />
      </div>
    </BrowserRouter>
  );
}

export default App;


