"use strict";
class Elemento extends HTMLElement {
    constructor() {
        super();
        this.build();
    }
    build() {
        const shadow = this.attachShadow({ mode: "open" });
        const botao = document.createElement("button");
        botao.innerText = " Clique em mim";
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./style.css";
        botao.append(link);
        shadow.append(botao);
    }
}
customElements.define("meu-elemento", Elemento);
