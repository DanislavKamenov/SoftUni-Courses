function captureTheNumbers(strings) {
    let regex = /[0-9]+/g;
    let text = strings.join(' ');

    console.log(text.match(regex).join(' '));
}

captureTheNumbers(['123a456', '789b987', '654c321', '0']);