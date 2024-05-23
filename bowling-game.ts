export class BowlingGame {
    private totalScore: number = 0;
    private scoreHistory: number[] = [];

    roll(pinDowns: number) {
        this.scoreHistory.push(pinDowns);

        const twoPreviousScores = this.scoreHistory.slice(this.scoreHistory.length - 3, this.scoreHistory.length - 2);
        const sumOfTwoPreviousScores = this.sumArray(twoPreviousScores);

        if (sumOfTwoPreviousScores >= 10) {
            this.scoreHistory[this.scoreHistory.length - 1] += pinDowns;
        }
    }

    score(): number {
        return this.sumArray(this.scoreHistory);
    }

    private sumArray(arr: number[]) {
        return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }
}
