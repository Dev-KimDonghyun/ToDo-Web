import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import MainPage from './pages/MainPage';

function LayOut () {
  return (
    <>
    <Outlet />
    </>
  );
}

const router = createBrowserRouter ([
  {
    path: '/',
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <MainPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
