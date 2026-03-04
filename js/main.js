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
