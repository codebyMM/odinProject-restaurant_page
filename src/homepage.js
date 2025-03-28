import { menu } from "./menu";
export function showHomePage() {
    let contentContainer = document.createElement('div');
    let welcomeTitle = document.createElement('p');
    let welcomeMessage = document.createElement('p');
    let orderBtn = document.createElement('button');

    contentContainer.classList.add('content-container');
    orderBtn.classList.add('order-btn');
    orderBtn.innerText = "Order Now!"

    welcomeTitle.classList.add('welcome');
    welcomeTitle.innerHTML = "Welcome to <br> <span>THE NASIGORENG</span>";

    welcomeMessage.classList.add('welcome-msg');
    welcomeMessage.innerText = "Welcome to The NasiGoreng, where every dish is made with passion and authenticity! We take pride in serving the best Nasi Goreng in town, cooked to perfection using fresh ingredients and traditional spices. Whether you're dining in or ordering to-go, we promise a meal that delights your taste buds and brings comfort with every bite. Come and experience the true taste of Indonesia!";

    orderBtn.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(menu());
    });
    
    contentContainer.append(welcomeTitle, welcomeMessage, orderBtn);
    return contentContainer;
}