#!/usr/bin/env python3
"""
Простий Python веб-сервер для Манга Магазину
Запуск: python3 server.py
Відкрийте: http://localhost:8000
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Налаштування
PORT = 8000
DIRECTORY = Path(__file__).parent

class SimpleHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def end_headers(self):
        # Додаємо CORS заголовки
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    """Запускає простий веб-сервер"""
    
    # Перевіряємо чи існує index.html
    index_path = DIRECTORY / 'index.html'
    if not index_path.exists():
        print("❌ Файл index.html не знайдено!")
        return
    
    print("🌸 Манга Магазин - Веб Сервер")
    print("=" * 40)
    print(f"📂 Директорія: {DIRECTORY}")
    print(f"🌐 Порт: {PORT}")
    print(f"🔗 URL: http://localhost:{PORT}")
    print("=" * 40)
    
    try:
        # Створюємо та запускаємо сервер
        with socketserver.TCPServer(("", PORT), SimpleHTTPRequestHandler) as httpd:
            print(f"✅ Сервер запущено на http://localhost:{PORT}")
            print("📱 Відкриваю браузер...")
            
            # Відкриваємо браузер
            try:
                webbrowser.open(f'http://localhost:{PORT}')
            except:
                print("⚠️  Не вдалось відкрити браузер автоматично")
                print("🖱️  Відкрийте http://localhost:8000 вручну")
            
            print("\n🛑 Натисніть Ctrl+C щоб зупинити сервер")
            print("-" * 40)
            
            # Запускаємо сервер
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n🛑 Сервер зупинено користувачем")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Порт {PORT} вже використовується!")
            print("💡 Спробуйте інший порт або зупиніть інший сервер")
        else:
            print(f"❌ Помилка: {e}")
    except Exception as e:
        print(f"❌ Неочікувана помилка: {e}")

if __name__ == "__main__":
    main()