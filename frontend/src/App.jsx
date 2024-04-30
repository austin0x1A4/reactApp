import List from './List.jsx';


function App() {
  const fruits = [{id: 1, name:"Apple", calories:95}, 
                  {id: 2,name:"Bananas", calories: 45}, 
                  {id:3, name:"Pineapple", calories:105}, 
                  {id: 4, name:"Berries", calories:37}, 
                  {id: 5, name:"Passion", calories:46}];
  const veggies = [{id: 6, name:"carrots", calories:33}, 
                  {id: 7,name:"potatoes", calories: 43}, 
                  {id:8, name:"Tomatoes", calories:85}, 
                  {id: 9, name:"cucumbers", calories:17}, 
                  {id: 10, name:"Courgettes", calories:44}];
  return(
    <>
    {fruits.length > 0 ? <List items={fruits} category="Fruits" />: null}
    {veggies.length > 0 ? <List items={veggies} category="Veggies" />: null}
    </>
    
  );
  
}

export default App
