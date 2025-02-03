import './App.css';

// Componentes
import Header from "./Header/Header";
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
