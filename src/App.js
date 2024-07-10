import {Container} from 'react-bootstrap'
import './index.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Categories from './components/Categories';
import ItemsList from './components/ItemsList';
import { items } from './data';
import { useState } from 'react';


function App() {
  const [itemsData,setItemsData]= useState(items)
  //grt all cat unique
  const allCategory =['All', ...new Set(items.map((i)=>i.category))]
  //filter by category
  const filterbyCategory =(cat)=>{
    if(cat==='All'){
      setItemsData(items)
    }else{
      const newArr = items.filter((item)=> item.category === cat)
      setItemsData(newArr)
    }
   
  }
  // filter by search
  const filterbySearch =(word)=>{
    if(word !==''){
      const newArr = items.filter((item)=> item.title === word)
      setItemsData(newArr)
    }
   
  }
         
  return (
    <div className='color-body font'  >
      <NavBar filterbySearch={filterbySearch}/>

    <Container>
      <Header/>
      <Categories filterbyCategory={filterbyCategory} allCategory={allCategory} />
      <ItemsList itemsData={itemsData}/>
      
    </Container>

    </div>
  );
}

export default App;
