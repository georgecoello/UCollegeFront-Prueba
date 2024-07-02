import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admission from "./layouts/Admission/FirstAdmission";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/admission" element={<Admission/>}>

                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
