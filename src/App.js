import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/body/sidebar/Sidebar';
import Feed from './components/body/feed/Feed';
import Widgets from './components/body/widgets/Widgets';
import Login from './components/login/Login';
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      { !user ? 
       ( < Login/>)
      : (
        <div>
          <Header/>
          <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
          </div>
        </div>
      )
        
      }
      
    </div>
  );
}

export default App;
