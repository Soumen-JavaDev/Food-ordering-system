async function getMenu() {
    try {
        let response = await fetch("food.json");
        let data = await response.json();
        displayItem(data);
        
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
}

let menu_item = document.querySelector(".menu-item");

function displayItem(data) {
    data.forEach((value) => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <div class="card-img">
                <img src="${value.imgSrc}" alt="item-img">
            </div>
            <div class="card-content">
                <div class="card-text">
                    <h3>${value.name}</h3>
                    <p>$${value.price}/-</p>
                </div>
                <div class="card-add-icon">+</div>
            </div>
        `;
        menu_item.appendChild(div);
    });
}

getMenu();
