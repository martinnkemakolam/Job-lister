import './App.css';
import svgClose from './images/icon-remove.svg'
import List from './components/List';
import data from './data';
import { useEffect, useState } from 'react';
function App() {
  let [arr] = useState(data)
  let [arrFilter, setArrFilter] = useState([])
  let [filter, setFilter] = useState([])
  useEffect(()=>{
    let filterFuc =()=>{
      let value = arr.filter((index)=>{
        let arr = [index.role, index.level,...index.languages,...index.tools]
        if(filter.some((index2)=>arr.includes(index2))){
          return index
        }
      })
      setArrFilter(value)
    }
    if (filter.length > 0) {
      filterFuc() 
    }
  },[filter])
  let addFilter =(arg)=>{
    if(!filter.includes(arg)) setFilter([...filter, arg])
  }
  let mapper = filter.length > 0 ? arrFilter: arr
  let list = mapper.map(index=>{
    return <List click={(arg)=> addFilter(arg)} key={index.id} imgSrc={index.logo} newBol={index.new} company={index.company} featBol={index.featured} position={index.position} postedAt={index.postedAt} time={index.contract} locate={index.location} specifics={[index.role, index.level,...index.languages,...index.tools]}/>
  })
  let deleteFunc=(id)=>{
    let newFilter = filter.filter((item, id2)=> id != id2)
    setFilter(newFilter)
  }
  let filterJsx = filter.map((index, id)=>{
    return <div key={id}><span>{index}</span><img onClick={()=>deleteFunc(id)} src={svgClose}></img></div>
  })
  return (
    <div className="App">
      <header>{
        filter.length !== 0 ?
        <div className='filter'>
          <div className='opt'>
            {filterJsx}
          </div>
          <button onClick={()=>{setArrFilter([]); setFilter([])}}>Clear</button>
        </div> : null}
      </header>
      <section className='jobListBody'>
        {list}
      </section>
    </div>
  );
}

export default App;
