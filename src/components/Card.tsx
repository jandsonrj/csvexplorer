import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../styles/App.css';

interface CSVData {
    [key: string]: string;
}

interface CardProps {
    data: CSVData[];
    searchQuery: string;
    setData: React.Dispatch<React.SetStateAction<CSVData[]>>;
}

const Card: React.FC<CardProps> = ({ data, searchQuery, setData }) => {
    const [filteredData, setFilteredData] = useState<CSVData[]>(data);

    useEffect(() => {
        const filtered = data.filter((row) => {
            return row.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredData(filtered);
    }, [data, searchQuery]);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            Papa.parse(file, {
                header: true,
                complete: (results: Papa.ParseResult<CSVData>) => {
                    setData(results.data);
                },
            });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <table>
                <thead>
                    <tr>
                        {filteredData.length > 0 &&
                            Object.keys(filteredData[0]).map((key) => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Card;
