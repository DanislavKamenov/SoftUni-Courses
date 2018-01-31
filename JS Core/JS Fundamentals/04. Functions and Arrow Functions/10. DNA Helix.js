function DNAHelix(num) {
    let strings = {
        str1: (starCount, dashCount) => `${'*'.repeat(starCount)}A${'-'.repeat(dashCount)}T${'*'.repeat(starCount)}\n`,
        str2: (starCount, dashCount) => `${'*'.repeat(starCount)}C${'-'.repeat(dashCount)}G${'*'.repeat(starCount)}\n`,
        str3: (starCount, dashCount) => `${'*'.repeat(starCount)}T${'-'.repeat(dashCount)}T${'*'.repeat(starCount)}\n`,
        str4: (starCount, dashCount) => `${'*'.repeat(starCount)}A${'-'.repeat(dashCount)}G${'*'.repeat(starCount)}\n`,
        str5: (starCount, dashCount) => `${'*'.repeat(starCount)}G${'-'.repeat(dashCount)}G${'*'.repeat(starCount)}\n`
}

    let starcount = 2;
    let dashcount = 0;
    let outputStr= '';
    let isReversed = true;

    for (let i = 0; i < num; i++) {
        let count = i % 5;
        outputStr += strings[`str${count + 1}`](starcount, dashcount);

        if (isReversed) {
            starcount--;
            dashcount+=2;
            if (dashcount === 4) {
                isReversed = false;
            }
        } else {
            starcount++;
            dashcount-=2;
            if (dashcount === 0) {
                isReversed = true;
            }
        }
    }
    console.log(outputStr);
}

DNAHelix(10);