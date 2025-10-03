# 10min E-Learning Platform

## Overview
The 10min E-Learning Platform is a web application designed for managing online courses and educational resources. It provides an admin dashboard for overseeing various aspects of the platform, including course management, user management, and statistics.

## Project Structure
```
10min-e-learning-platform
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components          # Reusable React components
│   ├── pages
│   │   └── admin
│   │       └── dashboard-page.tsx  # Admin dashboard component
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types
│       └── index.ts        # TypeScript types and interfaces
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/10min-e-learning-platform.git
   ```
2. Navigate to the project directory:
   ```
   cd 10min-e-learning-platform
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build of the application, run:
```
npm run build
```
The build artifacts will be stored in the `build` directory.

## Usage
- Access the admin dashboard to manage courses, view statistics, and handle user applications.
- Use the sidebar navigation to access different sections of the admin panel.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.