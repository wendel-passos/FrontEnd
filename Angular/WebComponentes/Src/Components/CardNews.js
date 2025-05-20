class CardNews extends HTMLElement {
    constructor(){
        super();
        
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Adiciona os elementos ao shadow DOM
        shadow.appendChild (this.build());
        shadow.appendChild (this.styles());
    }

    build() {  
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card-left');

        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Autor não definido');

        const linkTitle = document.createElement('a');
        linkTitle.textContent = (this.getAttribute('title') || 'Título não definido');
        linkTitle.href = this.getAttribute('link-url') || '#';

        const newContent = document.createElement('p');
        newContent.textContent = (this.getAttribute('content') || 'Content não definido');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card-right');

        const img = document.createElement('img');
        img.src = this.getAttribute('photo') || 'https://via.placeholder.com/150';
        img.alt = 'Imagem da notícia';
        
        cardRight.appendChild(img);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                justify-content: space-between;
                box-shadow: 2px 2px 12px rgba(0,0,0,0.2);
                padding: 20px;
                margin: 20px;
                font-family: 'Arial';
                box-shadow: -1px 11px 14px 6px rgba(0,0,0,0.75);
                -webkit-box-shadow: -1px 11px 14px 6px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 11px 14px 6px rgba(0,0,0,0.75);
                flex-direction: row;
                justify-content: space-between;
            }
            .card-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .card-left span {
                font-weight: 400;
            }
            .card-left a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            .card-left p {
                color: rgb(70, 70, 70);
            }
            .card-right img {
                max-height: 180px;
                border-radius: 10px;
            }
        `;
        return style;
    }  
}

customElements.define('card-news', CardNews);