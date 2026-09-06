import json
import soundfile as sf

# START

#     Get the WAV file to analyse
# audio, sample_rate = sf.read("tools/input_audio/Alla_Guerra.wav")
audio, sample_rate = sf.read("tools/input_audio/Una_Fantasia_Animata.wav")

# Open WAV
#     ↓
# Find and Print:
#     sample rate
#     number of channels
#     number of samples
#     duration
#     format

print(audio.shape)
print(sample_rate)
# print(audio[0])
print(audio[100000:100010])
print(audio.dtype)

duration = len(audio) / sample_rate
print(duration)


#     Decide how many waveform samples we want
#         ↓
#     Calculate how many audio samples belong
#     to each waveform sample

num_windows = 2000

samples_per_window = len(audio) / num_windows

print("samples_per_window: ", samples_per_window)

# title = "Alla Guerra"
title = "Una Fantasia Animata"

waveform = {
    "title": title,
    "duration": duration,
    "windows": []
}

# with open("window_boundaries.txt", "w") as f:
for i in range(num_windows):
    start = int(i * len(audio) / num_windows)
    end   = int((i + 1) * len(audio) / num_windows)

    window = audio[start:end]

#     For each waveform section:
#         ↓
#         Get left-channel samples
#         Get right-channel samples
# 
#         Find minimum and maximum
#         for each channel
    left_min = window[:, 0].min()
    left_max = window[:, 0].max()
    right_min = window[:, 1].min()
    right_max = window[:, 1].max()

    # Example output:
    # left:  min = -0.42   max = 0.67
    # right: min = -0.38   max = 0.61

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



#         Store:
#             left:  min / max
#             right: min / max

    # print("start: ", start, "end: ", end)
    # f.write(f"window {i}: start={start}, end={end}, left_min={round(left_min, 4)}, left_max={round(left_max, 4)}, right_min={round(right_min, 4)}, right_max={round(right_max, 4)}\n")




#     Create JSON structure:
#         duration
#         windows

# {
#     "title": "Alla Guerra",
#     "duration": 276.12,
#     "windows": [
#         {
#             "left":  { "min": -0.4121, "max": 0.303 },
#             "right": { "min": -0.5125, "max": 0.5425 }
#         }
#     ]
# }

#     Write JSON file

with open("tools/waveform.json", "w") as f:
    json.dump(waveform, f, indent=4)

# END