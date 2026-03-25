import os

html = "<html><body style='background:#111; color:white;'>"
for f in os.listdir('src/assets/asset'):
    if f.endswith('.webp') or f.endswith('.png') or f.endswith('.svg') or f.endswith('.jpg'):
        html += f"<h3>{f}</h3><img src='src/assets/asset/{f}' style='max-width:300px'/><hr/>"
html += "</body></html>"

with open('preview.html', 'w') as f:
    f.write(html)
