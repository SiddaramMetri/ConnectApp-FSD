import { Route, Routes } from "react-router-dom";

import Contacts from "../calls/pages/contacts/Contacts";

const RoutesComponent = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home Component</div>} exact />
        <Route path="/chart" element={<div>chart Component</div>} exact />
        <Route path="/contacts" element={<Contacts />} exact />
        <Route path="/teams" element={<div>teams Component</div>} exact />
        <Route
          path="/assignments"
          element={<div>assignments Component</div>}
          exact
        />
        <Route path="/calender" element={<div>calender Component</div>} exact />
        <Route path="/files" element={<div>files Component</div>} exact />

        <Route path="/apps" element={<div>apps Component</div>} exact />
        <Route path="/helps" element={<div>helps Component</div>} exact />
      </Routes>
    </div>
  );
};

export default RoutesComponent;
