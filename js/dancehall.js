function main(length, width, area) {
    let hall = (length * 100) * (width * 100);
    let wardrobe = (area * 100) * (area * 100);
    let benchSize = hall / 10;
    let freeSpace = hall - wardrobe - benchSize;
    let dancers = freeSpace / (40 + 7000);

    console.log(Math.floor(dancers));
}
main(50, 25, 2);