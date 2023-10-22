import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

export function Router() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         {/* <Route path='/browse' element={<Browse />} /> */}
         {/* <Route path='/support' element={<Support />} /> */}

         {/* <Route path='/game/:id' element={<Game />} /> */}
      </Routes>
   );
}

