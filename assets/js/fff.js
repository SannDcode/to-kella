function gantiKonten() {
    let contentBefore = document.getElementById("contentBeforeLove");
    let contentAfter = document.getElementById("contentAfterLove");

    contentBefore.classList.remove("show");
    contentAfter.classList.add("show");

    setTimeout(function () {
        contentBefore.style.display = "none";
        contentAfter.style.display = "block";
    }, 500); // Waktu transisi, disesuaikan dengan waktu pada CSS (0.5s)
}
