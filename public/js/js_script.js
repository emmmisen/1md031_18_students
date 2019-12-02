
function MenuItem(name, kc, img, adds, gluten, lactose) {
    this.productname = name; // The this keyword refers to the object itself
    this.kcal = kc;
    this.img = img;
    this.adds = adds
    this.gluten = gluten;
    this.lactose = lactose;
    this.name = function() {
        return this.productname + ' ' + this.lactose;
    };
}


var listBurger = []

listBurger.push(new MenuItem('Halloumiburger', "350 kcal",'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__13429__product_detail/Tryffel_Halloumi_hemsida_App.png',  "Avokado, sallad, tomat", false, false));
listBurger.push(new MenuItem('Tryffelburgare', "450 kcal",  'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__13426__product_detail/Tryffel_Double_Hemsida_App.png', "Sallad", true, true));
listBurger.push(new MenuItem('Chickenburger', "450 kcal",'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__13428__product_detail/Tryffel_Chicken_Hemsida_App.png',  "Sallad", true, true));
//listBurger.push(new MenuItem('Chickenburger', "450 kcal", false, true));

var myElement = document.getElementById("burgare"); 