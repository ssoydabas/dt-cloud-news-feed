import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components";
import { NewsView, RegisterView, LoginView } from "./views";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<NewsView />} />
        <Route path="/auth/register" element={<RegisterView />} />
        <Route path="/auth/login" element={<LoginView />} />
      </Routes>
    </div>
  );
}
