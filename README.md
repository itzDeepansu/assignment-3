# 🎨 Lovable Theme System

A fully functional, beautiful theme system for your dashboard, built with care and designed to offer instant visual feedback, smart dark mode handling, and seamless user experience.

---


## 💻 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/itzDeepansu/assignment-3
   cd assignment-3
1. Install Dependencies:
   ```bash
   npm install
1. Start Development Server:
   ```bash
   npm run dev


Each theme adapts to dark/light mode, ensuring consistency and accessibility.

---

## 🚀 First Version Features

- 📱 **Responsive Sidebar Navigation**  
  Collapsible sidebar that adapts to mobile and desktop layouts

- 📊 **Dashboard Overview**  
  View key metrics with summary cards and chart snapshots

- 📋 **Advanced Data Tables**  
  Includes sorting, filtering, and pagination

- 📈 **Interactive Charts**  
  Supports bar, line, and pie charts for data visualization

- 📅 **Calendar View**  
  Manage events with drag-and-drop calendar functionality

- 🗂️ **Kanban Board**  
  Organize tasks using a fully draggable kanban interface

- 🎨 **Theme Customization**  
  Choose from multiple themes with live previews

- 🌀 **Smooth Animations**  
  Transitions and interactions feel natural and polished

---

## 🖌️ Design Approach

- 🧼 **Clean, Modern Interface**  
  Subtle shadows, rounded corners, and clean typography

- 🎨 **Professional Color Palette**  
  Based on semantic tokens for consistency across components

- 🖱️ **Interactive UI**  
  Smooth hover states and micro-interactions for better UX

- 🧱 **Responsive Layouts**  
  Grid-based structure adapts well across screen sizes

- 📊 **Beautiful Chart Visualizations**  
  Data is displayed using visually appealing, readable charts

---

## ⚙️ How It Works

The theme system is powered by a custom `useTheme` React hook that:

- Dynamically updates CSS custom properties (`--color-primary`, `--bg`, etc.)
- Manages current theme and dark mode state
- Persists preferences to `localStorage`
- Applies changes instantly across the app (e.g. sidebar, cards, buttons, and text)

---

## 🧑‍💻 Code Structure

- `src/hooks/useTheme.ts` – Core logic for managing and applying themes
- `src/pages/Themes.tsx` – UI for selecting and previewing themes

---


## 🌈 Available Themes

1. **Default**
2. **Ocean Blue**
3. **Forest Green**
4. **Sunset Orange**
5. **Royal Purple**
6. **Monochrome**