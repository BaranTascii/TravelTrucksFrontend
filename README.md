🏕 TravelTrucks – Camper Rental Web Application

TravelTrucks is a modern camper rental platform built with React and Redux Toolkit.
The application enables users to explore available campers, apply advanced filters, view detailed information, and complete reservations through a validated booking form.

The project focuses on performance, scalability, and a mobile-first user experience.

🌐 Core Functionality

📂 Dynamic Camper Catalog

Camper data is retrieved from a backend API and rendered dynamically. The interface updates according to user interactions without page reloads.

🧭 Advanced Filtering System

Users can refine camper listings by:

- Location
- Vehicle type
- Technical features (Air Conditioning, Kitchen, TV, etc.)

Filtering logic updates results instantly for smooth interaction.

⭐ Favorites Persistence

Users can save preferred campers to a favorites list.
Favorites remain stored after page refresh using Redux Persist and Local Storage.

🖼 Detailed Camper Page

Each camper includes:

- Image gallery
- Technical specifications
- Feature list
- Description
- Integrated reservation module

🗓 Reservation Module

The booking form includes:

- Start date cannot be in the past
- End date must be after start date
- Required field validation
- Loading state during API call
- Success and error feedback

🔄 Enhanced User Experience

Incremental pagination with “Load More”
Custom loading animation during asynchronous requests
Scroll management during loading to prevent layout shift

🧩 Technology Stack

Frontend Framework
-React 18 (Vite)

State Management
- Redux Toolkit
- Redux Persist

Routing
- React Router v6

API Communication
- Axios

Styling Approach
- CSS Modules
- SVG icons optimized according to Figma design

🛠 Installation & Local Setup

Clone repository
git clone https://github.com/BaranTascii/TravelTrucksFrontend.git

Install dependencies
npm install

Start development server
npm run dev

Open in browser:
http://localhost:5173

🧠 Architectural Decisions

Frontend Data Handling

Due to backend limitations, data is fetched in bulk and filtering/pagination logic is managed efficiently on the client side.

State Management Strategy

Redux Toolkit is used for predictable state updates and structured async operations via thunks.

Reservation Validation

Date validation ensures logical booking flow and prevents invalid submissions before reaching the API.

UI Consistency

All prices are formatted consistently using toFixed(2) to maintain standardized currency display.

📱 Responsive Strategy

The application follows a mobile-first design approach:

- Base styles optimized for mobile screens
- Tablet and desktop breakpoints applied progressively
- Layout behavior aligned with Figma specifications

👨‍💻 Author

Baran Taşçı
Frontend Developer