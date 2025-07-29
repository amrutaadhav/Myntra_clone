let BagItems = []

displayItemonHomePage();

function addToBag(itemId){

    BagItems.push(itemId);
}
function displayItemonHomePage(){

    let itemContainerElement = document.querySelector(".items-container")


let innerHTML = " "
DataTransferItemList.forEach(item =>{
 innerHTML += `<div class="item-container">
        <img class="item-image" src ="${item.image}" alt="img">
        <div class = "rating">${item.rating.start} ⭐${item.rating.end}  </div>
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount">${item.discount}</span>
        </div>
        <button class="btn-add-bag" onclick = " addToBag (${item.id})">Add to Bag</button>
        </div>  `


})

}





itemContainerElement.innerHTML = innerHTML