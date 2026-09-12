import json
import soundfile as sf

# Get the WAV file to analyse
audio, sample_rate = sf.read("tools/input_audio/Una_Fantasia_Animata.wav")

duration = len(audio) / sample_rate

# Define how many waveform samples we want
num_windows = 2000
samples_per_window = len(audio) / num_windows

# Define the title of the piece
# title = "Alla Guerra"
title = "Una Fantasia Animata"

waveform = {
    "title": title,
    "duration": duration,
    "windows": []
}

for i in range(num_windows):
    start = int(i * len(audio) / num_windows)
    end   = int((i + 1) * len(audio) / num_windows)
    window = audio[start:end]

    left_min = window[:, 0].min()
    left_max = window[:, 0].max()
    right_min = window[:, 1].min()
    right_max = window[:, 1].max()

    # Create JSON structure:
    waveform["windows"].append({
        "left": {
            "min": round(left_min, 4),
            "max": round(left_max, 4)
        },
        "right": {
            "min": round(right_min, 4),
            "max": round(right_max, 4)
        }
    })

# Write JSON file
with open("tools/waveform.json", "w") as f:
    json.dump(waveform, f, indent=4)
