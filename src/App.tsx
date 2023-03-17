import { Routes, Route } from "react-router-dom";
import Breeding from "./Breeding/Breeding";
import Staking from "./Staking/Staking";

export default function App(){
    return    <>
    <Routes>
      <Route path="/" element={<Breeding />} />
      <Route path="/staking" element={<Staking />} />
      <Route path="*" element={<h1>404 | Page not fount</h1>} />
    </Routes>
  </>
}