const gallery = {1:"/images/gallery/Social Networks .jpg", 2:"/images/gallery/Supply Chain.jpg", 3:"/images/gallery/Media 003.jpg", 4:"/images/gallery/Fintech 004.jpg", 5:"/images/gallery/Health Tech.jpg",  6:"/images/gallery/E-commerce.jpg", 7:"/images/gallery/Travel Tech.jpg", 8:"/images/gallery/Edutech.jpg"}

// Gallery Slideshow 

let Img_Length = Object.keys(gallery).length
// console.log(Img_Length);
let Img_current = 1

function slide() {
    if(Img_current >= Img_Length) {
        Img_current = 1;
    }
    document.getElementById("client-gallery").src = gallery[Img_current];
    Img_current++;
}
function auto(){
    setInterval(slide, 3000);
}
window.onload = auto;

// Gallery Onclick

function display(list) {
    console.log(gallery[list.value]);
    document.getElementById("client-gallery").src = gallery[list.value]
}


// partner - image

// const partner_image = {1:"aws.png", 2:"google-cloud.png", 3:"oracle.png", 4:"microsoft.png", 5:"sap.png"}

// let i = Object.keys(partner_image).length
// for(let k=1; k<=i; k++) {
//     document.getElementById("bl").style.backgroundImage = `url(/images/partners/${partner_image[k]})`
// }