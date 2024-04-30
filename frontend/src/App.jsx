import Student from './Student.jsx'


function App() {
  return(
    <>
    <Student name='Austin Max' age="30" isStudent={true} />
    <Student name='64' age="34" isStudent={true} />
    <Student name='fontica Quan' age="23" isStudent={false} />
    <Student name='Sheila Njakry' age="39" isStudent={true} />
    <Student />
    
    </>
    
  );
  
}

export default App
