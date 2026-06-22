# Movie Finder

A React + Vite movie browsing app that fetches popular movies and lets users search titles from The Movie Database (TMDB). Users can browse movies, mark favorites, and keep those favorites saved locally in the browser.

## Features

- Browse popular movies on load.
- Search for movies by title.
- Add or remove movies from favorites.
- Keep favorites saved with `localStorage` so they persist after refresh.
- Navigate between the home page and the favorites page with React Router.
- Show movie posters, titles, and release years in a responsive grid.

## Tech Stack

- React 19
- Vite
- React Router DOM
- TMDB API
- Browser `localStorage`
- Feature-based CSS files

## Project Structure

- [src/main.jsx](src/main.jsx) bootstraps the app and wraps it in `BrowserRouter`.
- [src/App.jsx](src/App.jsx) defines the main routes and layout.
- [src/home.jsx](src/home.jsx) loads popular movies and handles search.
- [src/Fav.jsx](src/Fav.jsx) shows saved favorite movies.
- [src/Moviecard.jsx](src/Moviecard.jsx) renders each movie card and favorite button.
- [src/Moviecontext.jsx](src/Moviecontext.jsx) stores and shares favorite movie state.
- [src/services/api.js](src/services/api.js) handles TMDB requests.
- [src/navbar.jsx](src/navbar.jsx) provides app navigation.

## How It Works

When the app starts, the home page requests the TMDB popular movies list and stores it in state. The search form sends a query to the TMDB search endpoint and replaces the movie list with the results. Each movie card can be favorited through the shared context, and those favorites are written to `localStorage` so they survive page reloads.

The app uses React Context to avoid passing favorite-state props through multiple levels. That keeps the movie card, home page, and favorites page connected through one shared data source.

## What I Learned From This Project

- How to build a React app with Vite and organize it into reusable components.
- How to use `useState` and `useEffect` for API fetching and UI state.
- How to manage shared data with React Context instead of prop drilling.
- How to persist app data in `localStorage`.
- How to work with a real REST API and handle query parameters.
- How to use React Router for multi-page navigation in a single-page app.
- How to build a responsive movie grid with CSS.
- Why secrets and API keys should not live directly in frontend code.

## Setup

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```


.

## License

This project was built for learning and practice.
