with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace(
    'content="width=device-width, initial-scale=1.0"/',
    'content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/'
)

with open("mobile_patch.css", "r", encoding="utf-8") as f:
    mobile_css = "\n/* MOBILE RESPONSIVE */\n" + f.read() + "\n"

idx = html.rfind("</style>")
html = html[:idx] + mobile_css + html[idx:]

with open("mobile.html", "w", encoding="utf-8") as f:
    f.write(html)

print("mobile.html 생성 완료!")
