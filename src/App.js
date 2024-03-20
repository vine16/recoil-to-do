import React from "react";

import { RecoilRoot } from "recoil";
import ToDo from "./Components/ToDo";

function App() {
  return (
    <RecoilRoot>
      <ToDo />
    </RecoilRoot>
  );
}

export default App;
