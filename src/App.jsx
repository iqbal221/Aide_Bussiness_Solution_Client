import { RouterProvider } from 'react-router-dom';
import './App.css'
import Main from './layout/Main';
import { routes } from './routes/routes';



function App() {

  return (
    <RouterProvider router={routes}>
      <Main></Main>
      
    </RouterProvider>
  );
}

export default App
