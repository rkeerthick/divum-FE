const gallery = {1:"/images/gallery/Social Networks .jpg", 2:"/images/gallery/Supply Chain.jpg", 3:"/images/gallery/Media 003.jpg", 4:"/images/gallery/Fintech 004.jpg", 5:"/images/gallery/Health Tech.jpg",  6:"/images/gallery/E-commerce.jpg", 7:"/images/gallery/Travel Tech.jpg", 8:"/images/gallery/Edutech.jpg"}

let size = 1
for(let i in gallery) {
    setTimeout(() => {
        document.getElementById("client-gallery").src = gallery[size]
        size++
    }, 5000)
    
    
}

function display(list) {
    console.log(gallery[list.value]);
    document.getElementById("client-gallery").src = gallery[list.value]
}