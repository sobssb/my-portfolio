import { Route, Routes } from "react-router";
import Layout from "./routes/Layout";
import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default App;
