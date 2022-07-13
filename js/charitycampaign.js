function main(campaignDays, bakers, cakes, waffles, pancakes) {
    /*--product prices--*/
    let cakePrice = 45.00;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;

    /*--math for product totals--*/
    let cakeTotal = cakes * cakePrice;
    let waffleTotal = waffles * wafflePrice;
    let pancakeTotal = pancakes * pancakePrice;

    /*--total per day--*/
    let dailyTotal = (cakeTotal + waffleTotal + pancakeTotal) * bakers;

    /*--total for whole campaign--*/
    let campaignTotal = dailyTotal * campaignDays;

    /*--subtracting total costs from total sales--*/
    let costs = 0.125;
    let totalCosts = campaignTotal * costs;

    /*--final total going towards charity*/
    let totalTowardsCharity = campaignTotal - totalCosts;
     console.log(totalTowardsCharity.toFixed(2));
}
main(20, 8, 14, 30, 16);