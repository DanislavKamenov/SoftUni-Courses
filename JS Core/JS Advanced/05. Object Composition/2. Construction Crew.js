function solve(workerObj) {
    function workerHandler() {
        if (this.handsShaking) {
            this.bloodAlcoholLevel += 0.1 * this.weight * this.experience;
            this.handsShaking = false;
        }
        return this;
    }
    workerHandler.call(workerObj);
}
solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
);