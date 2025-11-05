# img.transform
A modern web-based image transformation tool build with FastAPI, OpenCV, and React + TypeScript.

## Overview
img.transform is a full-stack image transformation application that lets users upload an image and apply operations like rotation, scaling, and translation in real time.

## Architecture Overview
| Layer | Technology | Description |
| --- | --- | --- |
| Frontend | React, TypeScript, TailwindCSS | User interface for uploading and tranforming images |
| Backend | FastAPI, OpenCV, NumPy | Performs the mathematical image tranformations |
| Protocol | REST API | Image and transformation parameters sent as multipart/form-data |

## Installation and Setup
Prerequisites: Python, Node.js

Backend Setup:
1. Create and activate a virtual environment.
2. Install dependencies from requirements.txt.
3. Run `python main.py`
4. Backend runs at http://localhost:8080

Frontend Setup:
1. Navigate to `/client`
2. Run `yarn` then `yarn build`

After building, FastAPI automatically serves the static fronend from `client/dist`

## Data Flow
1. User uploads an image and sets transformation parameters.
2. React fronend sends a POST request to `/transform`
3. FastAPI decodes the image into a NumPy array.
4. OpenCV applies affine tranformations.
5. backend returns the tranformations.
6. Frontend displays the result.