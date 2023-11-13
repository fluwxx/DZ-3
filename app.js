var array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'or']
var tagCounts = {};
array.forEach(function (tag) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
})
console.log(tagCounts)



class Starbucks {
    constructor() {
        this.menu = {
            coffee: {
                espresso: "Strong black coffee made by forcing hot water through finely-ground coffee beans.",
                latte: "Coffee with steamed milk and a small amount of foam.",
                cappuccino: "Coffee with a frothy layer of steamed milk."
                // Добавьте другие разновидности кофе
            },
            tea: {
                greenTea: "Unoxidized tea known for its fresh taste and health benefits.",
                earlGrey: "Black tea flavored with oil of bergamot.",
                chai: "Spiced tea with a mixture of aromatic Indian spices and herbs."
                // Добавьте другие разновидности чая
            }
        };
    }

    acceptOrder(item) {
        const formattedItem = item.toLowerCase();
        if (this.menu.coffee.hasOwnProperty(formattedItem)) {
            return ('order accepted!')
        } else if (this.menu.tea.hasOwnProperty(formattedItem)) {
            return ('Order accepted!')
        } else {
            return "Error: Item not found. Please choose a valid coffee or tea option.";
        }
    }
}


const starbucksMenu = new Starbucks();


const order1 = starbucksMenu.acceptOrder("latte");
console.log(order1);

const order2 = starbucksMenu.acceptOrder("greenTea");
console.log(order2);

const order3 = starbucksMenu.acceptOrder("caramelMacchiato");
console.log(order3);