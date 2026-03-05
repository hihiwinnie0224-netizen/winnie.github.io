/**
 * 聯邦藝術中心 全站通用腳本
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // ===== 1. 手機版導覽列切換 (Mobile Menu) =====
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // 點擊選單連結後自動關閉選單
        const navLinks = document.querySelectorAll('.menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // ===== 2. 分頁標籤切換 (Tabs) =====
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetTabId = this.getAttribute("data-tab");
            const targetContent = document.getElementById(targetTabId);

            if (!targetContent) return; // 防錯機制

            // 移除所有按鈕與內容的 active 狀態
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // 為點擊的目標加上 active
            this.classList.add("active");
            targetContent.classList.add("active");

            // 平滑滾動至容器位置 (扣除頂部固定導覽列的高度)
            const container = document.querySelector(".tab-container");
            if (container) {
                window.scrollTo({
                    top: container.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
});

/**
 * 3. 搜尋功能 (放在全局，讓 HTML 的 oninput/onclick 可以直接呼叫)
 * 根據使用者輸入文字，比對展覽卡片的 data-info 屬性
 */
function searchEx() {
    const inputElement = document.getElementById('searchInput');
    if (!inputElement) return;

    const filter = inputElement.value.toLowerCase();
    const cards = document.querySelectorAll('.ex-card');

    cards.forEach(card => {
        const info = card.getAttribute('data-info') || "";
        // 使用 includes 代替 indexOf，語意更清晰
        if (info.toLowerCase().includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
