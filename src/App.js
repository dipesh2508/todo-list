import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { TodosList } from './MyComponents/TodosList';

function App() {
  return (
            <>
              <Header title = 'Todo'/>
              <TodosList/>
              <Footer/>
            </>
        );
}

        export default App;
