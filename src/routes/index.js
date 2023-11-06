import { Routes, Route } from "react-router-dom";
import Dashboard from './../pages/dashboard';
import Despesas from './../pages/despesas';
import Receitas from './../pages/receitas';
function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/despesas" element={<Despesas />} />
      <Route path="/receitas" element={<Receitas />} />
    </Routes>
  );
}
export default RoutesApp;