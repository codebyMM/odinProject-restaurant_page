import "./styles.css";
import { showHomePage } from "./homepage";
import { menu } from "./menu";

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('.nav-btn');

addEventListener("DOMContentLoaded", () => {
    content.append(showHomePage());
});
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        content.innerHTML = '';
        if (e.currentTarget.ariaLabel === 'home') {
            content.append(showHomePage());
        } else if (e.currentTarget.ariaLabel === 'menu') {
            content.appendChild(menu());
        }
    });
});
