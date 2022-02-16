const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 11420,
        content: "The Air Force 1 High '07 has everything you know best: crisp overlays, bold accents and the perfect amount of flash to let you shine. The padded, high-cut collar with classic hook-and-loop closure adds heritage b-ball comfort while perforations on the toe keep you cool.",
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 15495,
        content: "Step into comfort with the Air Jordan 1 Zoom Air Comfort. Refined to make one of history's most iconic sneakers more wearable, it combines full-grain leather in the upper with a cosy lining and responsive cushioning.",
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 8295,
        content: "Styled for the '70s.Loved in the '80s.Classic in the '90s.Ready for the future.The Nike Blazer Mid '77 Next Nature now delivers a timeless design made from at least 20% recycled content by weight.We replaced the leather upper, an environmentally intensive material, with an unbelievably crisp, partially recycled synthetic leather.",
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 6804,
        content: "Nike Crater Impact is part of our sustainability journey to transform trash into shoes that tread a little lighter.Made from at least 25% recycled material by weight, it brings in unique design choices that reduce waste when compared with traditional methods—like an embroidered Swoosh, efficient overlays and of course its Crater foam midsole.",
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 12259,
        content: "Space Hippie is a story of trash transformed. From the upper to the outsole, at least 25% of the Space Hippie 04 is made from recycled material, by weight. Not only is it the most lightweight silhouette within the collection, it also has the lowest carbon footprint. Its 'Space Waste Yarn' upper includes about 75% recycled content, by weight, made from recycled plastic bottles, T-Shirts and yarn scraps. A soft, Crater Foam midsole combines Nike grind with a blend of foams for stability and a unique aesthetic.",
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    }
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change text of current product
        currentProductTitle.textContent = choosenProduct.title

        //change price of the producr
        currentProductPrice.textContent = `₹${choosenProduct.price}`;

        //change image of the product
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })

        currentProductDesc.textContent = choosenProduct.content;

    })
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "whitesmoke";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click", () => {
    payment.style.display = "flex";
})

close.addEventListener("click", () => {
    payment.style.display = "none";
})