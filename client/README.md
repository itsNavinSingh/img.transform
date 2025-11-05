# img.transform (Frontend)

## Overview

The frontend is an interactive React + TypeScript interface that allows users to upload images, set transformation parameters, and visualize both original and transformed outputs instantly.

## Features

1. Upload iimages via drag & drop or file picker.
2. Adjust rotation, scale, translation (X, Y)
3. Real-time side-by-side image preview
4. Clean TailwindCSS UI
5. Modular TypeScript components

## Tech Stack

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| React            | Component-based UI          |
| TypeScript       | Type safety                 |
| Vite             | Fast bundler and dev server |
| TailwindCSS      | Styling                     |
| React Router Dom | Routing between pages       |

## Working

1. User uploads image
2. Adjusts parameters (rotation, scale, translation)
3. On "Transform", frontend sends POST request to backend.
4. Backend returns transformed image blob.
5. React renders the output dynamically

## Development Setup

```shell
cd client
yarn
yarn dev
```

Frontend runs at http://localhost:5173

## Build for Production

```shell
yarn build
```

This creates `client/dist/` which FastAPI serves automatically in production.
