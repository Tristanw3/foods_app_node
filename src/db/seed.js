// start db
require('./mongoose');

const Food = require('../models/food');

Food.collection.drop();

const coffee = new Food({ title: 'Hot Coffee', cost: 8.00, background: "#ffa8ca", image: "https://static.vecteezy.com/system/resources/previews/000/395/325/non_2x/hot-drink-paper-cup-with-mockup-sleeve-vector.jpg" })
coffee.save();
const donut = new Food({ title: 'Donut', cost: 6.00, background: "#f2e266", image: "https://static.vecteezy.com/system/resources/previews/000/406/612/non_2x/donut-with-a-bite-vector.jpg" })
donut.save();
const banana = new Food({ title: 'Banana Split', cost: 7.50, background: "#9bf2d7", image: "http://www.vectorsland.com/imgd/l91318-banana-split-86989.jpg" })
banana.save();
const pancake = new Food({ title: 'Pancakes', cost: 4.20, background: "orange", image: "https://media.istockphoto.com/vectors/breakfast-pancakes-illustration-vector-id928142004?k=6&m=928142004&s=612x612&w=0&h=cZIzTU4T4F7OsPSQsQJGHE-Y3Uq0tciuiDUd_Np2vG8=" })
pancake.save();
const icedCoffee = new Food({ title: 'Iced Coffee', background: "#ffa8ca", cost: 4.50, image: 'https://static.vecteezy.com/system/resources/previews/000/202/224/non_2x/iced-coffee-illustration-vector.jpg' })
icedCoffee.save();
const sundae = new Food({ title: 'Sundae', cost: 6.00, background: "#f2e266", image: "https://static.vecteezy.com/system/resources/previews/000/643/121/non_2x/vector-twisted-soft-ice-cream-on-pastel-background.png" })
sundae.save();
const salad = new Food({ title: 'Fruit Salad', cost: 5.60, background: "#9bf2d7", image: "https://static.vecteezy.com/system/resources/previews/000/271/037/non_2x/color-acai-bowl-vector.jpg" })
salad.save();
const pop = new Food({ title: 'Popsicle', cost: 5.60, background: "orange", image: "https://static.vecteezy.com/system/resources/previews/000/535/056/non_2x/vector-ice-pop.jpg" })
pop.save();