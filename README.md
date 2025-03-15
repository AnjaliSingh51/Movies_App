# Movies & TV Shows App

This is a **FullStack Movies & TV Shows App** built with React (frontend) and Node.js (backend). It allows users to browse, search, and view details of movies and TV shows using the OMDB API.

## Features

- **Homepage**: Displays a list of movies fetched from a local `movies.json` file.
- **Search Functionality**: Allows users to search for movies by title with autocomplete suggestions.
- **Detail Page**: Shows detailed information about a movie when clicked.
- **Local JSON Database**: A script (`fetchMovies.js`) fetches movies from the OMDB API and saves them to `movies.json`.

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js (for fetching movies and saving to `movies.json`)
- **API**: OMDB API
- **Styling**: CSS
- 
## How to Run the Project

### **If Downloading ZIP**
1. Go to your **GitHub repository**.
2. Click on **"Code"** and select **"Download ZIP"**.
3. Extract the ZIP file.
4. Open a terminal and **navigate to the extracted folder**.

---
## **If cloning**
### **Clone the Repository**

#### **1. Clone using SSH (Recommended)**
```bash
  git clone git@github.com:AnjaliSingh51/Movies_App.git
```
#### **2. Clone using HTTPS (If SSH is not set up)**
```bash
  git clone https://github.com/AnjaliSingh51/Movies_App.git
```
#### **3. Navigate to the project folder**
```bash
  cd Movies_App
```

## **Running the Project**

The project consists of two parts: **Backend** and **Frontend**.

### **1. Backend Setup**

1. **Move into the backend directory**:
   ```bash
   cd backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the backend server**:
   ```bash
   node fetchMovies.js
   ```

---

### **2. Frontend Setup**

1. **Open a new terminal** and navigate to the frontend:
   ```bash
   cd frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the React application**:
   ```bash
   npm start
   ```

---


---
### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OMDB API Key (you can get one from [OMDB API](http://www.omdbapi.com/apikey.aspx))

## **Project Structure**
```
Movies_App/
│── backend/
│   ├── fetchMovies.js  # Fetches movies from OMDB API
│   ├── package.json     # Backend dependencies
│── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # App pages (Homepage, DetailPage)
│   │   ├── styles/      # CSS styles
│   │   ├── utils/       # API handlers
│   ├── public/
│   ├── package.json     # Frontend dependencies
│── README.md
│── .gitignore
```
🚀


