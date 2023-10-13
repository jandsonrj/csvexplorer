import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
    test('handles query change correctly', () => {
        const onSearch = jest.fn();
        render(<SearchBar onSearch={onSearch} />);
        const input = screen.getByTestId('search-input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toBe('test');
    });

    test('handles form submission correctly', () => {
        const onSearch = jest.fn();
        render(<SearchBar onSearch={onSearch} />);
        const input = screen.getByTestId('search-input') as HTMLInputElement;
        const form = screen.getByTestId('search-form');
        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.submit(form);
        expect(onSearch).toHaveBeenCalledWith('test');
    });
});
