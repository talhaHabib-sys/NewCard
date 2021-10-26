import './App.css';
import {useState} from 'react'


function App() {
  
  const [a,b]=useState([])
  const [i,p]=useState([])
  
  
  let sdata=[
    {
      author:"William Blake",
      Image:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      book:'the book of thel',
      age:'555',
      country:'UK',
      Description:'Romance',

    },
    {
      author:"William Blake",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.history.com%2Fnews%2Fwhy-jane-austen-never-married&psig=AOvVaw00s1giuduKUdmpZNCKbDJh&ust=1635019582554000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJjiqs3o3vMCFQAAAAAdAAAAABAD",
      book:'the book of urizen',
      age:'477',
      country:'America',
      Description :'sci-fi',
    },
    {
      author:"William Blake",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWilliam_Blake&psig=AOvVaw06A1gg7Ps0oHL6iwH15Hu5&ust=1635019785540000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIi79K3p3vMCFQAAAAAdAAAAABAD",
      book:'the lamb',
      pages:'443',
      country:'itlay',
      Description:'love story',
    },
    {
      author:"William Shakespeare",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWilliam_Shakespeare&psig=AOvVaw1Bd2rQNsnZYwPva90PNKCI&ust=1635019067065000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMj-udfm3vMCFQAAAAAdAAAAABAD",
      book:'A Midsummer Nights Dream',
      age:'555',
      country:'UK',
      Description:'Romance',

    },
    {
      author:"William shakespeare",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.history.com%2Fnews%2Fwhy-jane-austen-never-married&psig=AOvVaw00s1giuduKUdmpZNCKbDJh&ust=1635019582554000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJjiqs3o3vMCFQAAAAAdAAAAABAD",
      book:'An Excellent conceited Tragedy',
      age:'477',
      country:'America',
      Description:'sci-fi'
    },
    {
      author:"William Shakespeare",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWilliam_Blake&psig=AOvVaw06A1gg7Ps0oHL6iwH15Hu5&ust=1635019785540000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIi79K3p3vMCFQAAAAAdAAAAABAD",
      book:'The Tempest',
      pages:'443',
      country:'itlay',
      Description:'love story'
    },
    {
      author:"jane Austen",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWilliam_Shakespeare&psig=AOvVaw1Bd2rQNsnZYwPva90PNKCI&ust=1635019067065000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMj-udfm3vMCFQAAAAAdAAAAABAD",
      book:'Pride and Prejudice',
      age:'555',
      country:'UK',
      Description:'Romance',

    },
    {
      author:"jane Austen",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.history.com%2Fnews%2Fwhy-jane-austen-never-married&psig=AOvVaw00s1giuduKUdmpZNCKbDJh&ust=1635019582554000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJjiqs3o3vMCFQAAAAAdAAAAABAD",
      book:'Sense And Sensibility',
      age:'477',
      country:'America',
      Description:'sci-fi'
    },
    {
      author:"jane Austen",
      Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FWilliam_Blake&psig=AOvVaw06A1gg7Ps0oHL6iwH15Hu5&ust=1635019785540000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCIi79K3p3vMCFQAAAAAdAAAAABAD",
      book:'Lady and Susan',
      pages:'443',
      country:'itlay',
      Description:'love story'
    }

  ];
  let abook=[{
    author:"William Blake",
    books:['the lamb','the book of urizen','the book of thel'],

  },
{
  author:"jane Austen",
  books:['Pride and Prejudice','Sense And Sensibility','Lady and Susan'],

},
{
  author:"William Shakespeare",
  books:['The Tempest','An Excellent conceited Tragedy','A Midsummer Nights Dream'],


}]
  function IMSHOW(e)
  {
    let a=e.target.value
    let ab=sdata.filter((z)=>z.book===a)
    p(ab)
    
  }
  console.log(i)
  function IMEF(e)
{
  let arr=e.target.value
  let d=abook.filter((c)=>{
    if (c.author===arr)
    {
      b(c.books)
    }
    return c
  })
  return d
}

  return (
    <div className='main' style={{textAlign:'center'}}>
      
      <h1>Author :</h1>
      <select className='sel' onChange={(e)=>IMEF(e)}>
      <option value='' selected disabled hidden>Select Author</option>
        <option value='jane Austen'>Jane Austen</option>
        <option value='William Shakespeare'>William Shakespeare</option>
        <option value='William Blake'>William Blake</option>
      </select>
      <h2>Book :</h2>
      <select onChange={(e)=>IMSHOW(e)}>{a.map((e,i)=>{return <option key={i}>{e}</option>})}
      <option value='' selected disabled hidden>Select Book</option>
      </select>
      <img src={sdata[0].Image} alt=""></img>
      
    </div>
  );
}

export default App;
