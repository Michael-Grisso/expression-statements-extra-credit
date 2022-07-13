function main(dollars, curr1, curr2) {
    let usd = 1.79549;
    let eur = 1.95583;
    let gbp = 2.53405;
    let bgn = 1;
    let result;

    if (curr1 === "USD" && curr2 === "BGN") {
        result = dollars / usd * bgn;
        console.log(`${result.toFixed(2)} BGN`);
    } else if (curr1 === "EUR" && curr2 === "BGN") {
        result = dollars / eur * bgn;
        console.log(`${result.toFixed(2)} BGN`);
    } else if (curr1 === "GBP" && curr2 === "BGN") {
        result = dollars / gbp * bgn;
        console.log(`${result.toFixed(2)} BGN`);
    }

    if (curr1 === "BGN" && curr2 === "USD") {
        result = dollars / bgn * usd;
        console.log(`${result.toFixed(2)} USD`);
    } else if (curr1 === "EUR" && curr2 === "USD") {
        result = dollars / eur * usd;
        console.log(`${result.toFixed(2)} USD`);
    } else if (curr1 === "GBP" && curr2 === "USD") {
        result = dollars / gbp * usd;
        console.log(`${result.toFixed(2)} USD`);
    }

    if (curr1 === "BGN" && curr2 === "EUR") {
        result = dollars / bgn * eur;
        console.log(`${result.toFixed(2)} EUR`);
    } else if (curr1 === "USD" && curr2 === "EUR") {
        result = dollars / usd * eur;
        console.log(`${result.toFixed(2)} EUR`);
    } else if (curr1 === "GBP" && curr2 === "EUR") {
        result = dollars / gbp * eur;
        console.log(`${result.toFixed(2)} EUR`);
    }

    if (curr1 === "BGN" && curr2 === "GBP") {
        result = dollars / bgn * gbp;
        console.log(`${result.toFixed(2)} GBP`);
    } else if (curr1 === "USD" && curr2 === "GBP") {
        result = dollars / usd * gbp;
        console.log(`${result.toFixed(2)} GBP`);
    } else if (curr1 === "EUR" && curr2 === "GBP") {
        result = dollars / eur * gbp;
        console.log(`${result.toFixed(2)} GBP`);
    }
    
}
main(20, "USD", "BGN");
main(100, "BGN", "EUR");
main(12.35, "EUR", "GBP");
main(150.35, "USD", "EUR");