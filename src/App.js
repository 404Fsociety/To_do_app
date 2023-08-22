import { useState } from 'react';
import './App.css';
import AddTask from './components/Add-tasks/AddTask';
import Cards from './components/Cards/Cards';
import Footer from './components/footer/Footer';
import TodoList from './components/welcome/TodoList/TodoList';
import Welcome from './components/welcome/Welcome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AlertBar from './components/AlertBar';

function App() {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="App">
       {showAlert && (
        <AlertBar
          message="Welcome to Our Website! Click the X to close this message."
          onClose={handleCloseAlert}
        />
      )}
      <Welcome/>
      <Cards/>
      <AddTask/>
      <TodoList />
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
