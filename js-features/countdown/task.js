const timeId = setInterval(() => {
    let time = document.getElementById("timer");
    time.textContent--;

    if (time.textContent === '0') {
        clearInterval(timeId);
        alert("Вы победили в конкурсе");
    }
}, 1000);
