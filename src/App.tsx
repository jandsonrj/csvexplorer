import React, { useState } from 'react';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import './styles/App.css';

interface CSVData {
  [key: string]: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<CSVData[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>CSV Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      <Card data={data} searchQuery={searchQuery} setData={setData} />
    </div>
  );
};

export default App;