function makeCoffee(sugar, milk)
{
    var instructions = "Boiler water, ";
    instructions += "pour into cup ";
    instructions += " add coffee granules, ";
    instructions += " add " + sugar + " spoons of sugar, ";
    instructions += " add " + milk + " % milk.";
    return instructions;

}

console.log(makeCoffee(2, 20));