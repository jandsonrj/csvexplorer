import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
    test('handles file upload correctly', () => {
        const mockData = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
        const file = new File([JSON.stringify(mockData)], 'test.csv', { type: 'text/csv' });
        const setData = jest.fn();

        const searchQuery = '';
        const { getByTestId } = render(<Card data={[]} searchQuery={searchQuery} setData={setData} />);

        const input = getByTestId('file-input');
        fireEvent.change(input, { target: { files: [file] } });
        expect(setData).toHaveBeenCalledWith(mockData);
    });
});
