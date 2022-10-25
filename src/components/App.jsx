import { Header } from './Header';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';

export const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </>
  );
};
