import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Career from './pages/Career';
import Education from './pages/Education';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/career" element={<Career />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
