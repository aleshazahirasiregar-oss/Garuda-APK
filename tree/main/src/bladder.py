# bladder.py
def update_bladder(bladder, limit=100):
    """
    Update bladder meter setiap loop.
    bladder: nilai bladder saat ini
    limit: batas maksimal bladder (default 100)
    return: nilai bladder terbaru
    """
    bladder += 10
    print(f"Bladder meter: {bladder}%")

    # Event di 50%
    if bladder == 50:
        print("😖 Kamu mulai gelisah...")

    # Event di 80% → teleport
    if bladder >= 80 and bladder < limit:
        print("🚽 Teleport ke toilet untuk bertahan!")

    # Event kalau bladder penuh
    if bladder >= limit:
        print("💧👖 Kencing celana! Kawannya jadi sus 🤔")

    return bladder