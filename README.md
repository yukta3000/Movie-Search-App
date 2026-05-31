# 🎬 CineQuest — Movie Search App

A responsive movie search app built with **React + Tailwind CSS**, powered by the OMDB API.

**Developed by: Yukta Taneja**

---

## ✨ Features

- 🔍 Search movies, series, and episodes
- 🎭 Filter results by type (movie / series / episode)
- 💀 Shimmer UI loading skeleton for smooth UX
- 🃏 Animated movie cards with hover effects
- ⚡ Quick-search suggestions on the home screen
- 📱 Fully responsive for mobile and desktop

## 🛠️ Tech Stack

- React 18
- Tailwind CSS
- OMDB Public API
- Parcel / CRA bundler

## 🚀 Getting Started

```bash
npm install
npm start
```

> **Note:** Get your free OMDB API key at [omdbapi.com](https://www.omdbapi.com/apikey.aspx) and replace `"trilogy"` in `App.jsx` with your key.

## 📁 Project Structure

```
src/
├── App.jsx              # Main app logic & layout
├── index.js             # React entry point
├── index.css            # Global styles + animations
└── components/
    ├── MovieCard.jsx    # Individual movie card
    ├── SearchBar.jsx    # Search input + button
    └── ShimmerCard.jsx  # Loading skeleton
```

---

Made with ❤️ by Yukta Taneja
