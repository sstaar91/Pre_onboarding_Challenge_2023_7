import ReactDOM from "react-dom/client";
import { Router, Route } from "./lib/react-router/react-router.tsx";
import Root from "./pages/Root/Root.tsx";
import About from "./pages/About/About.tsx";

import "./styles/reset.scss";
import "./styles/common.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Route path="/" element={<Root />} />
    <Route path="/about" element={<About />} />
  </Router>
);
