import ChildComponent from "./Components/ChildComponent";

const CommonComponent = () => {
  return <p>This is common Components</p>
};

function App(){
  return(
    <div>
      <h1>Heading</h1>
      <CommonComponent/>
      <ChildComponent/>
      
    </div>
  );
}

export default App;
