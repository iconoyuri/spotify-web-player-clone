class SearchBarHandler {
    constructor(inputBlock) {
        this.inputBlock = inputBlock;
        this.closeButton = this.inputBlock.querySelector(".close");
        this.input = this.inputBlock.querySelector("input");
        this.setEvents();
    }
    setEvents() {
        this.closeButton.addEventListener("click", function () {
            this.input.value = "";
            this.input.focus();
        }.bind(this));
    }
}

new SearchBarHandler(document.querySelector(".search-bar"));
