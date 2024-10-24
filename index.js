

const dataImages = 
[
    "https://besacenter.org/wp-content/uploads/2024/01/shutterstock_2379572031-scaled.jpg",
    "https://assets.nationbuilder.com/dcipalestine/pages/5873/attachments/original/1709831049/001_hero_starvation.jpg?1709831049",
    "https://turkiye.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2024-03/gazamarch24.jpeg?itok=2Ql94LnF",
    "https://static.euronews.com/articles/stories/08/01/49/58/1200x675_cmsv2_f5a5925e-2775-5883-9e1b-0addf5050ab4-8014958.jpg",
    "https://images.squarespace-cdn.com/content/v1/5f088a46ebe405013044f1a4/00fed630-020e-4796-99dd-e0eaa502fbb0/gaza-ga17c1c059_1280.jpg",
    "https://i.guim.co.uk/img/media/6a6245751ac3b29416aac3aa8509cdafc345331d/0_0_3453_2072/master/3453.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e6151ea86229fc8e85f5d4549716fdd4",
    "https://i.ytimg.com/vi/yycOZauzj3U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCw-09F5xCK0P8a_tDVLbPKB_AkSA",
    "https://www.thenation.com/wp-content/uploads/2017/04/palestine-children-arrests-rtr-img.jpg",
    "https://www.vice.com/wp-content/uploads/sites/2/2020/07/1596030851689-1572551557831-palestine.jpeg"
]

let index = 0;


const container = document.getElementById("container");

const divCenter = document.createElement("div");
divCenter.classList.add("div-style");

const h1 = document.createElement("h1");
h1.innerText = "FREE PALESTINE";
h1.classList.add("text-desing");

// ------------------------ DIV IMAGE CENTER -------------------------

const divImageCenter = document.createElement("div");
divImageCenter.classList.add("image-center");

const leftIcon = document.createElement("div");
leftIcon.classList.add("left-icon");

const centerImg = document.createElement("img");
centerImg.src = dataImages[index];
centerImg.classList.add("center-image");

const rightIcon = document.createElement("div");
rightIcon.classList.add("right-icon");

divImageCenter.appendChild(leftIcon);
divImageCenter.appendChild(centerImg);
divImageCenter.appendChild(rightIcon);

// ------------------------ DIV IMAGES -------------------------

const divImages = document.createElement("div");
divImages.classList.add("images");

dataImages.map(image => {

    const nextImage = document.createElement("img");
    nextImage.src = image;
    nextImage.classList.add("image");

    divImages.appendChild(nextImage)

})


// ------------------------ Left Click -------------------------

leftIcon.addEventListener("click" , () =>
{
    if(index > 0)
    { 
        index--;
        centerImg.src = dataImages[index]
    }

});


// ------------------------ Right Click -------------------------

rightIcon.addEventListener("click" , () =>
{
    const maxValue = dataImages.length - 1;
    if(index < maxValue)
    { 
        index++;
        centerImg.src = dataImages[index]
    }
});
    


divCenter.appendChild(h1);
divCenter.appendChild(divImageCenter);
divCenter.appendChild(divImages);

container.appendChild(divCenter);