import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import routes from "tempo-routes";
import NotFound from "./components/not-found";

// Lazy load dos componentes principais
const Home = lazy(() => import("./components/home"));

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p className="text-lg">Carregando...</p></div>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
