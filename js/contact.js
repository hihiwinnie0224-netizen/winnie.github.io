document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const btn = document.getElementById("submitBtn");
    const originalText = btn.innerText;

    btn.innerText = "傳送中...";
    btn.disabled = true;

    setTimeout(() => {
        alert("感謝您的留言！我們將儘速回覆您。");
        btn.innerText = "已送出 ✓";
        btn.style.background = "#28a745";

        this.reset();

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "#003366";
            btn.disabled = false;
        }, 2500);

    }, 1200);
});
