function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(dolphinsScores, koalasScores) {
    let avgDolphins = calcAverage(...dolphinsScores);
    let avgKoalas = calcAverage(...koalasScores);

    console.log(`Dolphins average score: ${avgDolphins}`);
    console.log(`Koalas average score: ${avgKoalas}`);

    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
        console.log("Dolphins win the trophy! ");
    } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
        console.log("Koalas win the trophy! ");
    } else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
        console.log("It's a draw! Both teams win the trophy! ");
    } else {
        console.log("No team wins the trophy.");
    }
}

//checkWinner([96, 108, 89], [88, 91, 110]);

// checkWinner([97, 112, 101], [109, 95, 123]);

checkWinner([97, 112, 101], [109, 95, 106]);
