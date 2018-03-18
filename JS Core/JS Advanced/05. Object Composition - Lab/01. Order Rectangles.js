function orderRectangles(rectangles) {
    let output = [];
    for (let [width, height] of rectangles) {
        output.push({
            width,
            height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let diff = other.area() - this.area();
                return diff || other.width - this.width;
            }
        })
    }
    output.sort((a,b) => a.compareTo(b));
    return output;
}

orderRectangles([[10,5],[5,12]]);