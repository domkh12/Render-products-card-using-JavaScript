import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/product.js";

const renderArea = document.querySelector('#card-area');

products.map((product)=>{
    renderArea.innerHTML += cardComponent(product);
})