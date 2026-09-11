from pathlib import Path
import json

# The directory containing this Python script
TOOL_DIR = Path(__file__).resolve().parent

# Input waveform JSON
# INPUT_FILE = TOOL_DIR / "waveform" / "Alla_Guerra.json"
INPUT_FILE = TOOL_DIR / "waveform" / "Una_Fantasia_Animata.json"

# Output SVG
# OUTPUT_FILE = TOOL_DIR / "output" / "Alla_Guerra.svg"
OUTPUT_FILE = TOOL_DIR / "output" / "Una_Fantasia_Animata.svg"

# Read the JSON file
with INPUT_FILE.open("r", encoding="utf-8") as file:
    data = json.load(file)


# Test that we have loaded the expected data
print("Title:", data["title"])
print("Duration:", data["duration"])
print("Number of windows:", len(data["windows"]))

# window = data["windows"][1000]
# 
# print("Test window:", window)

# windows = [
#     data["windows"][1000],
#     data["windows"][1100],
#     data["windows"][1200],
# ]

windows = data["windows"]

for i, window in enumerate(windows):
    print(f"Test window {i}:", window)


# SVG dimensions
svg_width = 1000
svg_height = 200


# left = window["left"]
# right = window["right"]

left_centre = 50
right_centre = 150
amplitude_scale = 50

# y_max = left_centre - left["max"] * amplitude_scale
# y_min = left_centre - left["min"] * amplitude_scale

lines = ""

for i, window in enumerate(windows):

    # x = 250 + i * 250
    x = i * svg_width / (len(windows) - 1)

    # Left channel
    left = window["left"]

    y_max = left_centre - left["max"] * amplitude_scale
    y_min = left_centre - left["min"] * amplitude_scale

    # stroke="red"
    lines += f'''
    <line
        x1="{x}"
        y1="{y_max}"
        x2="{x}"
        y2="{y_min}"
        stroke="#FFFFF0"
        stroke-width="2" />
    '''

    # Right channel
    right = window["right"]

    y_max = right_centre - right["max"] * amplitude_scale
    y_min = right_centre - right["min"] * amplitude_scale

    lines += f'''
    <line
        x1="{x}"
        y1="{y_max}"
        x2="{x}"
        y2="{y_min}"
        stroke="#FFFFF0"
        stroke-width="2" />
    '''


# Create the SVG
svg = f'''<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 {svg_width} {svg_height}"
    preserveAspectRatio="none">

    <rect width="100%" height="100%" fill="black" />

    <!-- Reference lines -->
    <line
        x1="0"
        y1="50"
        x2="1000"
        y2="50"
        stroke="white"
        stroke-width="1" />

    <line
        x1="0"
        y1="150"
        x2="1000"
        y2="150"
        stroke="white"
        stroke-width="1" />



    <!--
    <line
        x1="500"
        y1="{y_max}"
        x2="500"
        y2="{y_min}"
        stroke="red"
        stroke-width="1" />
    -->

    {lines}
</svg>
'''


# Write the SVG
with OUTPUT_FILE.open("w", encoding="utf-8") as file:
    file.write(svg)


print("Created:", OUTPUT_FILE)