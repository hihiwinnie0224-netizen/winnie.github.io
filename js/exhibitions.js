document.getElementById("searchInput").addEventListener("keyup", function () {

    let input = this.value.toLowerCase();
    let cards = document.getElementsByClassName("ex-card");

    for (let i = 0; i < cards.length; i++) {

        let info = cards[i].getAttribute("data-info").toLowerCase();

        if (info.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

});
