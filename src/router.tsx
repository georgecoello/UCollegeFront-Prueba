import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admission from "./layouts/Admission/FirstAdmission";
import Inscription from "./layouts/Inscription/Inscription";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/admission" element={<Admission/>}></Route>
                <Route path="/inscription" element={<Inscription/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
