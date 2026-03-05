document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".tab-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const tabName = this.getAttribute("data-tab");

            // 移除 active
            document.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
            });

            document.querySelectorAll(".tab-button").forEach(btn => {
                btn.classList.remove("active");
            });

            // 加上 active
            document.getElementById(tabName).classList.add("active");
            this.classList.add("active");

            // 平滑滾動
            window.scrollTo({
                top: document.querySelector(".tab-container").offsetTop - 80,
                behavior: "smooth"
            });

        });
    });

});
