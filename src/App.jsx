import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/desktop" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}