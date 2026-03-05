/**
 * 搜尋展覽卡片功能
 * 根據使用者輸入的文字，比對卡片的 data-info 屬性
 */
function searchEx() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('ex-card');
    
    for (let i = 0; i < cards.length; i++) {
        let info = cards[i].getAttribute('data-info').toLowerCase();
        
        // 如果包含搜尋文字則顯示，否則隱藏
        if (info.indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

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
