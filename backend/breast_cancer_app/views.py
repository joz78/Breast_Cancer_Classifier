from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import numpy as np
from PIL import Image
import tensorflow as tf

tf.get_logger().setLevel('ERROR')

# Model path
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'ml_model/best_model (1).keras')

model = None

def get_model():
    global model
    if model is None:
        model = tf.keras.models.load_model(MODEL_PATH, compile=False)
    return model

CLASS_NAMES = ['benign', 'malignant', 'normal']

class PredictView(APIView):
    def post(self, request):
        image_file = request.FILES.get('image')
        if not image_file:
            return Response({'error': 'No image uploaded.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            image = Image.open(image_file).convert("RGB")
            image = image.resize((224, 224))
            image = np.array(image) / 255.0
            image = np.expand_dims(image, axis=0)

            model = get_model()
            prediction = model.predict(image)
            predicted_class = CLASS_NAMES[np.argmax(prediction)]
            confidence = float(np.max(prediction))

            return Response({
                'prediction': predicted_class,
                'confidence': round(confidence, 3)
            })

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
