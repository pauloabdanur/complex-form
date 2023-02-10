import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import { FormStep4 } from './pages/FormStep4';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormStep1 />} />
        <Route path="/page2" element={<FormStep2 />} />
        <Route path="/page3" element={<FormStep3 />} />
        <Route path="/page4" element={<FormStep4 />} />
      </Routes>
    </BrowserRouter>
  );
};
