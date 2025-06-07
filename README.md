# 🗑️ Skip Selection App

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

_A modern, responsive React application for selecting waste disposal skips with advanced filtering, multiple view modes, and an intuitive user interface._

</div>

---

## ✨ Features

### 🎯 **Core Functionality**

- 🔍 **Skip Selection** - Browse and select from available waste disposal skips
- 👀 **Multiple View Modes** - Cards, Compare, and List views for different user preferences
- 🎚️ **Advanced Filtering** - Filter by road placement, heavy waste capability, price range, and size
- ❤️ **Favorites System** - Save preferred skips for quick access
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🎨 **User Interface**

- ✨ **Modern Design** - Glassmorphism effects with gradient backgrounds
- 🌊 **Smooth Animations** - Slide transitions and hover effects
- 🎮 **Interactive Elements** - Card carousel with navigation dots
- ⚡ **Real-time Updates** - Dynamic filtering and selection feedback

### 📱 **View Modes**

1. 🎴 **Cards Mode** - Carousel-style browsing with detailed skip information
2. ⚖️ **Compare Mode** - Grid layout for side-by-side comparison
3. 📋 **List Mode** - Compact list view for quick scanning

## 🏗️ Technical Architecture

### 📁 **Component Structure**

```
📦 src/
├── 🧩 components/
│   ├── 🔧 common/
│   │   ├── 🏷️ Badge.jsx          # Reusable badge component
│   │   └── ⏳ LoadingSpinner.jsx # Loading state component
│   ├── 🗑️ skip/
│   │   ├── 🎴 SkipCard.jsx       # Individual skip card component
│   │   ├── 📄 SkipListItem.jsx   # List view item component
│   │   ├── 🎚️ SkipFilters.jsx    # Filtering interface
│   │   └── 📱 SkipSelectionPage.jsx # Main page component
│   └── 🎯 Header.jsx             # Page header with statistics
├── 🪝 hooks/
│   ├── 📊 useSkips.js           # Skip data management
│   └── ❤️ useFavorites.js       # Favorites functionality
├── 🛠️ utils/
│   └── ⚙️ skipUtils.js          # Utility functions
└── 🌐 api/
    └── 📡 api.js                # API service layer
```

### 🚀 **Key Technologies**

- ⚛️ **React 18** - Functional components and hooks
- 🎨 **Tailwind CSS** - Utility-first styling and responsive design
- 🎭 **Lucide React** - Beautiful, consistent iconography
- 🪝 **Custom Hooks** - Centralized state management and data fetching

## 💡 Implementation Approach

### 1. 🧱 **Component-Based Architecture**

The application follows a modular component structure where each component has a single responsibility:

- 🎴 **SkipCard** - Handles individual skip display and interactions
- 🎚️ **SkipFilters** - Manages all filtering logic and UI
- 📱 **SkipSelectionPage** - Orchestrates the overall page state and view modes

### 2. 🎛️ **State Management Strategy**

- 🏠 **Local State** - Used for UI interactions and component-specific data
- 🪝 **Custom Hooks** - Centralized logic for skip data (`useSkips`) and favorites (`useFavorites`)
- 💾 **Session Storage** - Persists favorites across browser sessions

### 3. 📱 **Responsive Design Principles**

- 📲 **Mobile-First** - Components adapt from mobile to desktop
- 🔄 **Flexible Layouts** - CSS Grid and Flexbox for adaptive layouts
- 🎭 **Conditional Rendering** - Different UI elements for different screen sizes

### 4. 👥 **User Experience Focus**

- 📈 **Progressive Enhancement** - Works on all devices with enhanced features on larger screens
- 👀 **Visual Feedback** - Clear indication of selected states and user actions
- ♿ **Accessibility** - Semantic HTML and keyboard navigation support

## 🔄 Data Flow

1. **🌐 Data Fetching** - API service fetches skip data from external endpoint
2. **📊 State Management** - Custom hooks manage skip data and user preferences
3. **🎚️ Filtering** - Real-time filtering based on user-selected criteria
4. **📱 Display Logic** - Components render filtered data in selected view mode
5. **👤 User Interaction** - Selection and favorites update application state

## 🎨 Styling Approach

<div align="center">

### 🌈 **Design System**

| Element                   | Style                   | Description                                  |
| ------------------------- | ----------------------- | -------------------------------------------- |
| 🎨 **Color Palette**      | Purple & Pink Gradients | Modern dark theme with vibrant accents       |
| ✍️ **Typography**         | Bold, Readable Fonts    | Clear hierarchy with emphasis on readability |
| 📏 **Spacing**            | Tailwind Scale          | Consistent spacing using design tokens       |
| 🔮 **Glass Morphism**     | Backdrop Blur Effects   | Modern aesthetic with transparency           |
| ✨ **Micro-interactions** | Hover & Transitions     | Enhanced UX with smooth animations           |

</div>

## 🔌 API Integration

<div align="center">

### 🌐 **WeWantWaste API**

```
🔗 Endpoint: https://app.wewantwaste.co.uk/api/skips/by-location
🛡️ Fallback: Graceful error handling with mock data capability
💰 Processing: Real-time price calculations and categorization
```

</div>

---

## 🚀 Future Enhancements

<div align="center">

| Feature                 | Description                                    | Priority  |
| ----------------------- | ---------------------------------------------- | --------- |
| 🔍 **Search**           | Text-based search for specific skip types      | 🔥 High   |
| 📅 **Booking Flow**     | Complete booking integration                   | 🔥 High   |
| 👤 **User Accounts**    | Persistent favorites and booking history       | 🟡 Medium |
| 🎯 **Advanced Filters** | Date availability and location-based filtering | 🟡 Medium |
| 📈 **Analytics**        | User behavior and preference tracking          | 🔵 Low    |

</div>

---

## 🎯 Getting Started

<div align="center">

### 🚀 **Quick Setup**

```bash
# 📦 Install dependencies
npm install

# 🎬 Start development server
npm start

# 🌐 Open browser
http://localhost:3000
```

_The application will fetch real skip data and provide a fully functional skip selection experience._

</div>

---

<div align="center">

### 👨‍💻 Author

Karim Salam  
3D Frontend Developer | MERN Stack Engineer  
[GitHub](https://github.com/KarimSalam1)

</div>
