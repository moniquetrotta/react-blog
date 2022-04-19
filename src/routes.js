import {BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
//pages
import Main from './pages/Main';
import Article from './pages/Article';

const Rota = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
)

export default Rota;