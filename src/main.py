import time
import random

# Bladder meter awal
bladder = 0
limit = 100

print("=== Game Tahan Kencing 💧👖 ===")
print("Sprite aktif: Kawan Sus 🤔, Toilet 🚽, Toilet Monster 💀")

while bladder < limit:
    time.sleep(1)  # simulasi waktu berjalan
    bladder += 10
    print(f"Bladder meter: {bladder}%")

    # Event di 50%
    if bladder == 50:
        print("😖 Kamu mulai gelisah...")

    # Event random muncul sprite
    if bladder % 30 == 0:
        event = random.choice(["Kawan Sus 🤔 muncul!", "Elang Sigma 🦅 lewat!", "Toilet 🚽 terlihat di kejauhan..."])
        print(f"Event: {event}")

    # Teleport ke toilet
    if bladder >= 80:
        print("🚽 Kamu teleport ke toilet untuk bertahan!")
        break

# Game over
if bladder >= limit:
    print("💧👖 Kencing celana! Kawannya jadi sus 🤔")