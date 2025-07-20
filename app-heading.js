class AppHeading extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.hidden = false;
    }
    open() {
        const template = document.querySelector("#template");
        const templateContent = template.content.cloneNode(true);
        if (!this.shadowRoot.hasChildNodes()) {
            this.shadowRoot.appendChild(templateContent);
        }
        const modal = this.shadowRoot.querySelector(".modal");
        modal.classList.add("fade-in");
        modal.classList.remove("fade-out");

        this.handleClose = (e) => {
            if (
                e.target.closest(".close") ||
                e.target.classList.contains("modal")
            ) {
                this.close();
            }
        };
        this.shadowRoot.addEventListener("click", this.handleClose);
        this.dispatchEvent(
            new CustomEvent("open", { bubbles: true, composed: true })
        );
    }
    close() {
        const modal = this.shadowRoot.querySelector(".modal");
        if (modal) {
            modal.classList.remove("fade-in");
            modal.classList.add("fade-out");
        }
        modal.addEventListener("animationend", () => {
            this.shadowRoot.innerHTML = "";
        });
        this.dispatchEvent(
            new CustomEvent("close", { bubbles: true, composed: true })
        );
        this.shadowRoot.removeEventListener("click", this.handleClose);
    }
}

customElements.define("app-card", AppHeading);
