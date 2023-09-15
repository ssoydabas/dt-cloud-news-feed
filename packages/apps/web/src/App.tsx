import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components";
import { NewsView, RegisterView, LoginView, UserView } from "./views";

export default function App() {
  return (
    <div>
      <Navigation />
      <div className="px-80">
        <Routes>
          <Route path="/" element={<NewsView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/user" element={<UserView />} />
        </Routes>
      </div>
    </div>
  );
}
