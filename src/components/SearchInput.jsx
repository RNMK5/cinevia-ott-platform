import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <label className="search-input glass-panel">
      <Search size={18} />
      <input type="text" placeholder="Search movies, series, genres" />
    </label>
  );
}
