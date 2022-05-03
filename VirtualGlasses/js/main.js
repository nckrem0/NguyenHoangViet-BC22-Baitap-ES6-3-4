let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
const glassList = dataGlasses.map((glass,index) => {
    return glass.src ;
})
const colorGlass = () => {
    let content = "";
    for (const key in glassList) {
        content += `<div class = "glassColor"><img src="${glassList[key]}" alt="#" style = "width :150px ; height :100px"></div>`
    }
    document.getElementById("vglassesList").innerHTML = content ;
}
colorGlass();
const avatar = document.getElementById("avatar");
const chooseColor = document.getElementsByClassName("glassColor");
const changeGlass = dataGlasses.map((glass,index) =>{
    return glass.virtualImg
})
console.log(changeGlass);
const showGlass = () => {
    let content = "";
    for (const key in changeGlass) {
        content += `<div><img src="${changeGlass[key]}" alt="#"></div>`
    }
    document.getElementById("vglasses__model").innerHTML = content ;
    console.log(`${changeGlass[key]}`);
}

// class Glass {
//     constructor (id,src,virtualImg,brand,name,price,description){
//         this.id = id ;
//         this.id = src ;
//         this.id = virtualImg ;
//         this.id = brand ;
//         this.id = name ;
//         this.id = price ;
//         this.id = description ;
//     }
// }
// const glassInformation = dataGlasses.map((glass) => {
//     const {id,src,virtualImg,brand,name,color,price,description} = glass ;
//     return new Glass (id,src,virtualImg,brand,name,color,price,description)
// })
// console.log(dataGlasses,glassInformation);
// for (let index = 0; index < chooseColor.length; index++) {
//     const element = chooseColor[index];

//     console.log(element);
//     element.addEventListener("click", () => {
//         let content = "" ;
//         for (const index in dataGlasses) {
//             content += `<div>${dataGlasses[index]}</div>`
//         }
//         document.getElementById("avatar").innerHTML = content ;
//     });
// }





