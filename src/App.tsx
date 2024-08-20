import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import EstadoGlobalContextApi from "./paginas/EstadoGlobalContextApi";
import EstadoGlobalRedux from "./paginas/EstadoGlobalRedux";
import EstadoGlobalZustand from "./paginas/EstadoGlobalZustand";
import EstadoHttp from "./paginas/EstadoHttp";
import EstadoLocal from "./paginas/EstadoLocal";
import Home from "./paginas/Home";

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ padding: '10px 20px', backgroundColor: '#6200ea', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Voltar para Home
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/estado-global-context-api"
            element={<EstadoGlobalContextApi />}
          />
          <Route path="/estado-global-redux" element={<EstadoGlobalRedux />} />
          <Route
            path="/estado-global-zustand"
            element={<EstadoGlobalZustand />}
          />
          <Route path="/estado-http" element={<EstadoHttp />} />
          <Route path="/estado-local" element={<EstadoLocal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
