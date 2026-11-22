from PIL import Image
import sys

try:
    img = Image.open(r"C:\Users\pc\.gemini\antigravity\brain\27669e59-a53e-4a55-a819-c476ec5c398c\.user_uploaded\media_1789815413135.jpg")
    img = img.convert('RGB')
    width, height = img.size
    
    # Just above the 03 - BUILD text
    print(f"Top Left (above 03): {img.getpixel((50, 50))}")
    # Middle of the section
    print(f"Middle Center: {img.getpixel((width//2, height//2))}")
except Exception as e:
    print(e)
