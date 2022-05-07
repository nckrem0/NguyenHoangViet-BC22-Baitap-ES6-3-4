import Glasses from "./services.js";
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

// const glassesList = dataGlasses.map((glass) => {
//     let glassObject = new Glasses(glass.id, glass.src, glass.virtualImg, glass.brand, glass.name, glass.color, glass.price, glass.description);
//     return glassObject;
//     })
// window.selectGlass = (virtualImg) => {
//     const result = `
//         <div class="glasses">
//             <img src="${virtualImg}" style="width:100">
//         </div>
//         `
//     document.getElementById("avatar").innerHTML = result;
    
// }
// window.inforGlasses = (brand , name ,color ,price,description) => {
//     const result = `
//         <div>
//             ${brand}
//             ${name}
//             ${color}
//             ${price}
//             ${description}
//         </div>
//     `
//     document.getElementById("glassesInfo").innerHTML = result ;
// }


// const showGlasses = () => {
//     const showGlassList = glassesList.reduce((result, glassObject) => {
//         let { src, virtualImg} = glassObject;
//         return result += `
//                 <div  class="col-4 ">
//                     <img src="${src}" onclick="selectGlass('${virtualImg} ')" style="width:150px">
//                 </div>
                
//                 `
//     }, " ");
//     document.getElementById("vglassesList").innerHTML = showGlassList;
// }
// showGlasses();
// const showInforGlass = () => {
//     const showInfor = glassesList.reduce((result,glassObject) => {
//         let {brand , name ,color ,price,description} = glassObject ;
//         return result += `
//         <div  class="col-4 ">
//             <img src="${src}" onclick="inforGlasses('${brand}')">
//         </div>
//         `
        
//     }," ");
//     document.getElementById("glassesInfo").innerHTML = showInfor;
//     console.log(showInfor);
// }
// showInforGlass();
// let avatar = "";
// window.removeGlasses = (remove) => {
//     if (remove) {
//         avatar = document.getElementById("avatar").innerHTML;
//         document.getElementById("avatar").innerHTML = "";
//     }
//     document.getElementById("avatar").innerHTML = avatar;
//     avatar = "";
// }




//new

// get info glass

const listGlass = document.querySelector("#vglassesList");
const displayGlass = document.querySelector(".displayGlass");
const glassDescription = document.querySelector(".vglasses__info");

let showListGlass = "";

let currentIndex = 0;
let beforeIndex = 0;
let afterIndex = 0;
let glass_current = [];


// show list glass
dataGlasses.map((glass)=>{
    return showListGlass += `
    <div class="col-4" id="infoGlass">
        <img src="${glass.src}" style="width:150px" id='${glass.id}'>
    </div>`; 
})
listGlass.innerHTML = showListGlass;


let allInfo = document.querySelectorAll("#infoGlass");

// event when click image
allInfo.forEach((item)=>{
    item.addEventListener('click',(glass)=>{
        const glassId = glass.target.id;

        const infoGlass = getInfoGlassById(glassId);
        showGlass(infoGlass.virtualImg)
        showInfo(infoGlass);

        // befor after
        glass_current.push(glassId);
        currentIndex = glass_current.length - 1;
        if(currentIndex > 0)
        {
            beforeIndex = currentIndex - 1;
            afterIndex = beforeIndex + 1;
        }
    })
})

// get info glass by id
const getInfoGlassById = (id) =>{
    let objGlass = {};
    for(const glass of dataGlasses)
    {
        if(glass.id == id)
        {
            objGlass = glass;
            break;
        }
    }
    return objGlass;
}

// show glass
const showGlass = (img) =>{
    displayGlass.innerHTML = `<img src="${img}"/>`;
}


const showInfo = (info) => {
    glassDescription.innerHTML = `
        <div>
             <p style="font-weight:'bold'">${info.brand} - ${info.name} (${info.color})</p>
             <p style = "height: 30px ; width: 40px ; background-color : red;">$${info.price}</p>
             <p>${info.description}</p>
        </div>`
    glassDescription.style = `display: block`
}


// show before
window.showBeforeAfter = (type) => {
    if(glass_current.length > 1)
    {
        let index = beforeIndex;
        if(type == 'after')
        {
            index = afterIndex
        }

        const glassId = glass_current[index];
        let objGlass = {};
        for(const glass of dataGlasses)
        {
            if(glass.id == glassId)
            {
                objGlass = glass;
                break;
            }
        }
        showGlass(objGlass.virtualImg);
        showInfo(objGlass);
    }
}


