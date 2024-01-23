import ChildComponent from "./Components/ChildComponent";
import TeachersPage from "./Components/PropsConcept/Teachers";

const CommonComponent = () => {
  return <p>This is common Components</p>
};

function App(){
  return(
    <div>
      <h1>Heading</h1>
      {/*<CommonComponent/>
      <ChildComponent/>*/}
      <TeachersPage/>
      
    </div>
  );
}

export default App;
