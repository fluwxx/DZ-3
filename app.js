var array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'or']
var tagCounts = {};
array.forEach(function (tag) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
})
console.log(tagCounts)



var starbucks = {
    coffee:{
        espresso: "Strong black coffee made by forcing hot water through finely-ground coffee beans.",
        latte: "Coffee with steamed milk and a small amount of foam.",
        cappuccino: "Coffee with a frothy layer of steamed milk."
    },
    tea:{
        greenTea: "Unoxidized tea known for its fresh taste and health benefits.",
        earlGrey: "Black tea flavored with oil of bergamot.",
        chai: "Spiced tea with a mixture of aromatic Indian spices and herbs."
    },
};


function order(type, name) {
    var category = starbucks[type];

    if (category) {
        var item = category[name];

        if (item) {
            console.log(`Order accepted! You've ordered a ${name}: ${item}`);
        } else {
            console.error(`Error: ${name} ${type}`);
        }
    } else {
        console.error(`Error: ${type}`);
    }
}

order('tea','chai')