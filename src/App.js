import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name='Jessore' special='Digital city'></District>
      <District name='Khulna' special='Division'></District>
      <District name='Magura' special='Small city'></District>
      <District name='Jhenaidah' special='District'></District>
    </div>
  );
}

function LoadPost(){
  const [posts , setPosts] = useState([]); //step no:-1
  useEffect( () =>{        //step no :-2
    fetch('https://jsonplaceholder.typicode.com/posts') //step no :-3
    .then(res => res.json())
    .then (data => setPosts(data))  //step no :-4
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length} </h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>) //step no :-5
      }
    </div>
  )
}

function Post (props){
  return(
    <div style={{backgroundColor: 'lightgray', borderRadius:'20px', margin:'20px', padding:'20px', border: '3px solid black', margin:'15px'}}>
       <h2>Title: {props.title}</h2>
       <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle ={
  backgroundColor:'yellow',
  borderRadius:'20px',
  margin:'15px',
  border:'3px solid black',
  padding:'20px'
}

function District (props){
  const [power, setPower] = useState(1);
  const boostPower = () =>{
    const newPower = power * 2;
    setPower(newPower);
  }
  return(
    <div style={districtStyle}>
      <h2>Name: {props.name} </h2>
      <p>Specialty: {props.special} </p>
      <h4>Power: {power} </h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}

export default App;
