# events.py
import random

def random_event():
    """
    Pilih dan tampilkan event random.
    Dipanggil misalnya setiap bladder % 30 == 0.
    """
    events = [
        "Kawan Sus 🤔 muncul!",
        "Elang Sigma 🦅 lewat!",
        "Toilet 🚽 terlihat di kejauhan...",
        "Toilet Monster 💀 mendekat!"
    ]
    event = random.choice(events)
    print(f"Event: {event}")
    return event