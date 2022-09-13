/*manges all the routes of the application*/

import {Routes, Route} from "react-router-dom";
import {Home} from "../Pages/Home";
import {Saved} from "../Pages/Saved";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="saved" element={<Saved />} />
      </Routes>
    </>
  )
}
