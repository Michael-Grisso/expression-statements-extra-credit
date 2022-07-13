function main(whiskeyPrice, beer, wine, rakia, whiskeyAmount) {

    /*--setting up pricing--*/
    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice - (0.4 * rakiaPrice);
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);

    /*--total purchase costs for all items--*/
    let rakiaTotal = rakiaPrice * rakia;
    let beerTotal = beerPrice * beer;
    let wineTotal = winePrice * wine;
    let whiskeyTotal = whiskeyAmount * whiskeyPrice;
    let totalCost = rakiaTotal + beerTotal + wineTotal + whiskeyTotal;

    /*--output--*/
    console.log(totalCost.toFixed(2));

}
main(50, 10, 3.5, 6.5, 1);