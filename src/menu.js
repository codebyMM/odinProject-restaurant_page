export function menu() {
    const nasiGorengMenu = [
        {
          name: "Nasi Goreng Original",
          price: 1.56,
          image: "https://images.unsplash.com/photo-1680675027408-7232d86cbc47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Nasi Goreng Seafood",
          price: 2.19,
          image: "https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Nasi Goreng Ayam",
          price: 1.88,
          image: "https://images.unsplash.com/photo-1647093953000-9065ed6f85ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Nasi Goreng Spesial",
          price: 2.50,
          image: "https://images.unsplash.com/photo-1668839746796-c5bca3982957?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Nasi Goreng Kampung",
          price: 1.75,
          image: "https://images.unsplash.com/photo-1660927428739-46f19e9a4e63?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ];
    const foodContainer = document.createElement('div');
    const sectionTitle = document.createElement('h1');
    foodContainer.classList.add('food-container');
    foodContainer.innerHTML = nasiGorengMenu.map(menu => {
        return `<div class="food">
        <div class="food-img">
        <img src="${menu.image}" alt="${menu.name}" srcset="">
        </div>
        <div class="food-desc">
        <h3 class="food-name">${menu.name}</h3>
        <h4 class="food-price">$${menu.price}</h4>
        </div>
        </div>`;
    }).join("");
    return foodContainer;
}