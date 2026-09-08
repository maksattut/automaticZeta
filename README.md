# ТОО «Джамиля» — Презентация по Автоматизации Завода

Интерактивная веб-презентация проекта автоматизации и внедрения ИИ-инноваций на мебельном производстве ТОО «Джамиля».

## 🚀 Публикация через GitHub Pages

Чтобы запустить эту презентацию через **GitHub Pages**, выполните следующие шаги:

1. **Создайте репозиторий на GitHub:**
   - Перейдите на [GitHub](https://github.com/) и создайте новый публичный репозиторий (например, `dzhamilya-presentation`).

2. **Загрузите файлы в репозиторий:**
   - Выполните команды в терминале:
     ```bash
     git init
     git add .
     git commit -m "Initial commit for slide presentation"
     git branch -M main
     git remote add origin https://github.com/ВАШ_USERNAME/dzhamilya-presentation.git
     git push -u origin main
     ```
   - Или просто перетащите файлы `index.html`, `README.md` и папку `images/` через веб-интерфейс GitHub.

3. **Включите GitHub Pages:**
   - Перейдите в ваш репозиторий ➔ **Settings** (Настройки) ➔ **Pages**.
   - В разделе **Source** выберите ветку `main` и папку `/ (root)`.
   - Нажмите **Save**.
   - Через 1–2 минуты ваша презентация откроется по адресу: `https://ВАШ_USERNAME.github.io/dzhamilya-presentation/`

---

## 🖼️ Как самостоятельно заменить картинки

В папке презентации вы можете создать директорию `images/` и положить туда нужные файлы:

- **Слайд 1 (Trello):** `images/trello-board.png`
- **Слайд 2 (ИИ Учетчик):** картинка уже встроена внутри `index.html`, но при желании вы можете заменить атрибут `src` в `index.html` на путь к новому файлу `images/ai-agent-scheme.png`.
- **Слайд 3 (QR Карта сборки):** QR-код встроен прямо в HTML. Для замены укажите свой файл `images/qr-assembly.png`.
- **Слайд 4 (3D Базис):** `images/bazis-3d-model.png`
- **Слайд 5 (Обратная связь):** `images/feedback-qr.png`
