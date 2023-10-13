import React, { useState } from 'react';
import '../styles/App.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} data-testid="search-form"> 
         <input type="text"
            value={query}
            onChange={handleQueryChange}
            className="input-container"
            data-testid="search-input"
         />
            <button type="submit" className="button-container">Search</button>
        </form>
    );
};

export default SearchBar;
