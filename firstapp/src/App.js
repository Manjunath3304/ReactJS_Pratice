import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  return(
    <div>
      <h1>Hello world</h1>
      <Home name={"manju"} age={25}/>
      <Home name={"vijay"} age={23}/>
      <About />
      <Contact />
    </div>
  );
}

export default App;
