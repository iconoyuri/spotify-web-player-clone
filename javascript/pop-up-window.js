class PopUpHandler {
    constructor(trigger, target, blur) {
        this.trigger = trigger;
        this.target = target;
        this.blur = blur;
        this.visible = false;
        this.setEvents();
    }
    setEvents() {
        this.trigger.addEventListener(
            "click",
            function () {
                this.show();
            }.bind(this)
        );
        this.target.querySelector(".close")?.addEventListener(
            "click",
            function () {
                this.hide();
            }.bind(this)
        );
        document.body.addEventListener(
            "click",
            function (e) {
                if (e.target != this.trigger) {
                    if (!e.target.closest("." + this.target.classList[0]))
                        if (this.visible) this.hide();
                }
            }.bind(this)
        );
    }
    show() {
        this.target.classList.add("visible");
        if (this.blur) document.body.classList.add("blured");
        this.visible = true;
    }
    hide() {
        this.target.classList.remove("visible");
        if (this.blur) document.body.classList.remove("blured");
        this.visible = false;
    }
}

var navbar = document.querySelector("nav");
var trigger = navbar.querySelector(".pop-up-trigger");
var target = navbar.querySelector(".links");
new PopUpHandler(trigger, target);
