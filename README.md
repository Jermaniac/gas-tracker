# Gasoline Prices Viewer

## Introduction
The Gasoline Prices Viewer is a web application designed to simplify and enhance the readability of gasoline price data provided by the Spanish government. The government API is free to use but presents data in a format that is not user-friendly. This project retrieves and processes that data, making it accessible and easy to understand for users. The application consists of a Python backend that processes the raw data and a Next.js frontend that displays the data in an easy way.

## How to Build It

### Backend (Python)

1. **Setup Python Environment**:
   - It's recommended to use `pyenv` to manage your Python versions.
   - After installing `pyenv`, create and activate a new virtual environment:
     ```bash
     pyenv virtualenv <version> gasoline-viewer-env
     pyenv activate gasoline-viewer-env
     ```

2. **Install Dependencies**:
   - Navigate to the `server` folder.
   - Install the required Python libraries by running:
     ```bash
     pip install -r requirements.txt
     ```

### Frontend (Next.js)

1. **Install Node.js and pnpm**:
   - Ensure you have Node.js installed.
   - Install `pnpm` package manager by following the instructions at [pnpm.io](https://pnpm.io/).

2. **Install Dependencies**:
   - Navigate to the root of the project.
   - Install the required Node.js packages:
     ```bash
     pnpm install
     ```

## How to Run It

### Backend (Python)

1. **Start the Backend Server**:
   - In the `server` directory, run the backend server with:
     ```bash
     python app.py
     ```
   - This will start the Python server, which processes and serves the gasoline price data to the frontend.

### Frontend (Next.js)

1. **Start the Frontend Server**:
   - From the project root, run the following command to start the Next.js development server:
     ```bash
     pnpm run dev
     ```
   - The frontend should now be running on `http://localhost:3000`.

## How to Use It

1. **Selecting a Province**:
   - When you first access the application, you'll be presented with a list of Spanish provinces.
   - Select a province to view gasoline data specific to that region.

2. **Viewing Gasoline Data**:
   - After selecting a province, a dashboard will appear showing the following:
     - **Average Prices**: The average gasoline prices in the selected province.
     - **Top 5 Cheapest Stations**: A list of the top 5 cheapest gasoline stations in the province.
     - **Map View**: A Leaflet map displaying the exact locations of the cheapest gasoline stations.

3. **Interacting with the Map**:
   - Click on any of the cheapest gasoline stations listed to see its location highlighted on the map.
   - The map will update to show the selected station prominently.

## Release Notes

### Known Bugs
- **Map Initialization Error**: Occasionally, you may encounter an error stating that the "Map container is already initialized." This is a known issue with the Leaflet map component and can typically be resolved by refreshing the page.
- **Search province error**: When searching for a province, the results will appear on the first page, but the other pages will still be available for selection. This might cause confusion, as the search results are only shown on the first page. To avoid this, we could consider hiding the other pages based on the search results.
- **Page movement when switching fuel types**: When switching between fuel types on the dashboard, the page may shift slightly, causing a distracting movement. This issue likely stems from CSS inconsistencies.

### Pending Tasks
- **Map Interaction Enhancement**: We plan to improve the map interaction by highlighting a selected gas station directly on the map when clicked in the list. This will make it easier for users to locate the station visually.

For any additional issues, suggestions, or contributions, please feel free to open an issue or submit a pull request on the project's GitHub repository.
