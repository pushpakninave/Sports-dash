const menuItems = document.querySelectorAll(".menuItem");
const wrapper = document.querySelector(".sliderWrapper")

const products = [
    {
        id: 1, 
        title: "Air Force", 
        price: 119, 
        colors:[
            {
                code : "black",
                img : "./assets/air.png",
            },
            {
                code: "darkblue",
                img: "./assets/air2.png",
            }, 
        ],
        description: "Graduating with first-class honours? Wherever you debut this fresh AJ3, the regal combo of True Blue with Metallic Copper and elephant-print accents is bound to turn heads."
      },
      {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "./assets/jordan.png",
          },
          {
            code: "green",
            img: "./assets/jordan2.png",
          },
        ],
        description: "Intimate, complicated and ready to skate—now that's a piece of art."
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "./assets/blazer.png",
          },
          {
            code: "green",
            img: "./assets/blazer2.png",
          },
        ],
        description:`Pack your style—on your feet. Bringing a fresh twist to the iconic skate shoes, this "take what you need"`
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "./assets/crater.png",
          },
          {
            code: "lightgray",
            img: "./assets/crater2.png",
          },
        ],
        description: `embroidered accents bring a sporty mystique that pairs perfectly with any 'fit'`
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "./assets/hippie.png",
          },
          {
            code: "black",
            img: "./assets/hippie2.png",
          },
        ],
        description: `as always, Virgil left room for others to be creative. The design pairs traditional laces with a second set that loops through Flywire cables.`
    }
]
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");
console.log(currentProductDesc);
// set initial properties of size buttons.
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

menuItems.forEach(
    (item, index)=>{
        item.addEventListener("click", ()=>{
            console.log("menu clicked");
            // change the current slide
            wrapper.style.transform = `translateX(${-100 * index}vw)`;
            
            // change the choosen product
            choosenProduct = products[index];
            console.log(choosenProduct + "is the choosenProductIndex");
            
            // change text of current product
            currentProductTitle.textContent = choosenProduct.title;
            currentProductPrice.textContent = "$ " + choosenProduct.price;
            currentProductImg.src = choosenProduct.colors[0].img;  
            currentProductDesc.innerHTML = choosenProduct.description;
            // assign new color change
            currentProductColors.forEach((color, index) => {
              color.style.backgroundColor = choosenProduct.colors[index].code;
            });

            currentProductColors.forEach((color, index) => {
              color.addEventListener("click", ()=>{
                currentProductImg.src = choosenProduct.colors[index].img;
              })
            });

            // iterates over products 
            // inner loop iterates over the sizes present inside the sizes div.
            currentProductSizes.forEach((size, index) => {
              size.addEventListener("click", () => {
                currentProductSizes.forEach((size) => {
                  size.style.backgroundColor = "white";
                  size.style.color = "black";
                });
                size.style.backgroundColor = "black";
                size.style.color = "white";
              });
            });
          }

        );
        const productButton = document.querySelector(".productButton");
        const payment = document.querySelector(".payment");
        const close  = document.querySelector(".close");
        
        productButton.addEventListener(("click"), ()=>{
          payment.style.display = "flex";
        });

        close.addEventListener(("click"),()=>{
          payment.style.display = "none";
        })
      }
);

