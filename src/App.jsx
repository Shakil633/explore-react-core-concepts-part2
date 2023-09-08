import './App.css'
import Counter from './Counter'
import Team from './Team'
import Friends from './friends'
import Users from './users'


function App() {
  function handleClick() {
    alert ('Please give me our number')
    
  }

  function handleClick2() {
    alert ('please about your self')
    
  }
  const addToFive=(num)=>{
    alert (num+5)
  }

  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>


      <Users></Users>


     <Team></Team>

     <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>

      <button onClick={()=>{alert('third click')}}>third</button>

      {/* vajailaila */}
      <button onClick={()=>(addToFive(4))}>Four</button>
    
    </>
  )
}

export default App
