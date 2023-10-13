# CSVExplorer

## Description

This is a web application built with React that allows users to upload a CSV file from their local computer and search for data within the file. The CSV data is displayed as cards on the page, with each card showing the details of one row of the CSV file.

## Prerequisites

Before using this application, make sure you have Node.js installed on your system.

## Installation

To install the application, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/jandsonrj/csvexplorer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd csvexplorer
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

- To start the application, run the following command:

    ```bash
    npm run dev
    ```

The application will be available at http://localhost:4000.

The following functionalities are available:

- Upload CSV File: Click the "Upload File" button to upload a CSV file from your computer.
- Search data: Use the search bar to search data in the uploaded CSV file. The application will update the displayed cards to only show matching results.
- Data Display: CSV data is displayed as cards on the page, with each card showing the details of a row of the CSV file.

## Automated Tests

- To run automated tests, use the following command:

    ```bash
    npm run test
    ```

## Contributing

If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a branch with your feature: git checkout -b my-feature.
3. Commit the changes: git commit -m 'Adding new feature'.
4. Push to the branch: git push origin my-feature.
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
