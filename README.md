# Simultaneous Timers

Run any number of countdown timers at once — built for cooking, where one timer is never enough.

**Live → [squireaintready.github.io/simultaneous-timer](https://squireaintready.github.io/simultaneous-timer/)**

## Why

When you're following a recipe, you're juggling several timers at once: dough baking for 15 minutes while a stew simmers for 40. One kitchen timer doesn't cut it. This is a tiny web app that lets you spin up as many simultaneous timers as you need — each one disappears automatically when it finishes.

## Features

- **Unlimited concurrent timers**, each with its own name
- **Accurate countdown** — anchored to wall-clock time, so it stays correct even if the tab is backgrounded and `setInterval` is throttled
- **Pause / resume / reset** per timer
- **Auto-removes** a timer the moment it hits zero
- **Mobile-first** responsive grid, touch-friendly controls, accessible labels

## Stack

React 18 · Create React App · plain CSS — **no UI library**, no icon dependency (inline SVGs), ~48 kB gzipped.

## Run locally

```bash
npm install
npm start        # http://localhost:3000
```

```bash
npm run build    # production build
npm run deploy   # publish to GitHub Pages
```
