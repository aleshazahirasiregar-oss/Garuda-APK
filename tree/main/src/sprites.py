# sprites.py
import os

def load_sprite(name, folder="assets"):
    """
    Load sprite dari folder assets.
    name: nama file sprite (contoh 'toilet.png')
    """
    path = os.path.join(folder, name)
    if os.path.exists(path):
        print(f"🖼️ Sprite {name} berhasil diload dari {folder}/")
        return path
    else:
        print(f"⚠️ Sprite {name} tidak ditemukan di {folder}/")
        return None