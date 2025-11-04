from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import StreamingResponse
import cv2
import numpy as np
import io

app = FastAPI(title="Image Transformation APP")

@app.post("/transform")
async def transform_image(
    file: UploadFile = File(...),
    rotation: float = Form(0.0),
    scale: float = Form(1.0),
    translate_x: float = Form(0.0),
    translate_y: float = Form(0.0),
):
    contents = await file.read()
    np_img = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
    if img is None:
        return {"error": "Invalid image file"}
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    (h, w) = gray.shape[:2]
    center = (w/2, h/2)

    rotation_matrix = cv2.getRotationMatrix2D(center, rotation, scale)

    rotation_matrix[0, 2] += translate_x
    rotation_matrix[1, 2] += translate_y

    transformed = cv2.warpAffine(gray, rotation_matrix, (w, h))

    _, buffer = cv2.imencode(".jpg", transformed)
    io_buf = io.BytesIO(buffer)
    return StreamingResponse(io_buf, media_type="image/jpeg")


@app.get("/")
def home():
    return {"message": "Image Transformation API is running!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8080)