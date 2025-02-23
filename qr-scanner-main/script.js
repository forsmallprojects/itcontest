document.getElementById("file-input").addEventListener("change", function() {
    let fileStatus = document.getElementById("file-status");
    let langBtn = document.getElementById("lang-btn").textContent; // Получаем текущий язык

    if (this.files.length > 0) {
        fileStatus.textContent = this.files[0].name;
        fileStatus.style.color = "green";
    } else {
        fileStatus.textContent = langBtn === "RU" ? "*File is not chosen" : "*Файл не выбран";
        fileStatus.style.color = "red";
    }
});

// Функция обработки нажатия на кнопку SCAN QR
document.getElementById("scan-btn").addEventListener("click", function() {
    let fileInput = document.getElementById("file-input");
    let resultText = document.getElementById("result-text");
    let langBtn = document.getElementById("lang-btn").textContent; // Получаем текущий язык

    if (!fileInput.files.length) {
        alert(langBtn === "RU" ? "Please select a QR code image first!" : "Пожалуйста, выберите изображение с QR-кодом!");
        return;
    }

    resultText.textContent = langBtn === "RU" ? "Scanning QR code..." : "Сканирование QR-кода...";

    // Здесь можно вставить код для обработки QR-кода
    setTimeout(() => {
        resultText.textContent = langBtn === "RU" ? "Decoded QR data will be shown here" : "Результат расшифровки QR-кода будет отображён здесь";
    }, 2000);
});

// Переключение языка + смена шрифта
document.getElementById("lang-btn").addEventListener("click", function() {
    let langBtn = document.getElementById("lang-btn");
    let title = document.getElementById("title");
    let insertText = document.getElementById("insert-text");
    let scanBtn = document.getElementById("scan-btn");
    let resultText = document.getElementById("result-text");
    let fileStatus = document.getElementById("file-status");
    let body = document.body;

    if (langBtn.textContent === "RU") {
        langBtn.textContent = "EN";
        title.textContent = "Сканер QR-кодов";
        insertText.textContent = "ВСТАВЬТЕ QR-КОД СЮДА";
        scanBtn.textContent = "СКАНИРОВАТЬ";
        resultText.textContent = "Результат будет отображён здесь";

        // Меняем шрифт на Montserrat для русской версии
        body.classList.remove("en-mode");
        body.classList.add("ru-mode");

        // Обновляем статус файла при переключении языка
        if (fileStatus.textContent === "*File is not chosen") {
            fileStatus.textContent = "*Файл не выбран";
        }
    } else {
        langBtn.textContent = "RU";
        title.textContent = "QR Scanner";
        insertText.textContent = "INSERT YOUR QR HERE";
        scanBtn.textContent = "SCAN QR";
        resultText.textContent = "The result will be displayed here";

        // Меняем шрифт на K2D для английской версии
        body.classList.remove("ru-mode");
        body.classList.add("en-mode");

        // Обновляем статус файла при переключении языка
        if (fileStatus.textContent === "*Файл не выбран") {
            fileStatus.textContent = "*File is not chosen";
        }
    }
});
