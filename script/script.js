let BagItems = []
onload()
function onLoad(){
    displayItemonHomePage();
    displayBagIcon()
    let bagItemsStr =  localStorage.setItem('bagItems')
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []
}
displayItemonHomePage();

function addToBag(itemId){

    BagItems.push(itemId)
    displayBagIcon()
    localStorage.setItem('bagItems' , JSON.stringify(bagItems))
}

function displayBagIcon(){
    let bagItemsCountElement = document.querySelector(".bag-item-count")
    if(bagItems.length > 0){
        bagItemsCountElement.computedStyleMap.visibility = "visible"
         bagItemsCountElement.innerText = bagItems.length
    }
    else{
         bagItemsCountElement.computedStyleMap.visibility = "hidden"

    }
   


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