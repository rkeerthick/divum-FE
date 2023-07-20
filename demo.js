const gallery = ["", "/images/gallery/Social Networkds .jpg", "/images/gallery/Supply Chain.jpg", "/images/gallery/Media 003.jpg", "/images/gallery/Fintech 004.jpg", "/images/gallery/Health Tech.jpg",  "/images/gallery/E-commerce.jpg", "/images/gallery/Travel Tech.jpg",, "/images/gallery/Edutech.jpg"]
function display(list) {
    var li = JSON.parse(list)
    console.log(li)
    console.log(typeof(li))
    console.log(gallery[li])
}
console.log(gallery[1])