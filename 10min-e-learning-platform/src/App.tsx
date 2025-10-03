import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashboardPage from "./pages/admin/dashboard-page";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/dashboard" component={AdminDashboardPage} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
};

export default App;