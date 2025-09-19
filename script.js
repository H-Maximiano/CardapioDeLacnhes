const products = document.getElementById("productes");
const menu = document.getElementById("menu");
const desconto = document.getElementById("Desconto");
const filter = document.getElementById("filter");
const soma = document.getElementById("soma");

function formatCurrency(value) {
   return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
}


function list(array ) { 
    let myLi = ''
    array.forEach(product => {
         myLi += `
        <li>
            <img src="${product.src}" alt="${product.name}">
            <p class="item-price">${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `; })
   products.innerHTML = myLi }


function descont() {
    const menuDescont = menuOptions.map((item) => ({
        ...item,
        price: item.price * 0.9,})) 
list(menuDescont)}

function totalMenu(params) {

    const totMenu = menuOptions.reduce((acc,item)=> acc + item.price,0)

   products.innerHTML = `
    <li>
        <p>Valor total dos itens é  ${formatCurrency(totMenu)}</p>
    </li> 
    `;

}

function menuFiltro(params) {
    const filtro = menuOptions.filter(item =>item.vegan)
    


    list(filtro)
}



    
menu.addEventListener("click",() => list(menuOptions) );
desconto.addEventListener("click", descont );
soma.addEventListener('click',totalMenu);

filter.addEventListener('click',menuFiltro)

