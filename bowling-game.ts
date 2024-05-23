export class BowlingGame {
    private totalScore: number = 0;
    private isItSpare: boolean = false;

    roll(pinDowns: number) {
        this.totalScore += this.isItSpare ? pinDowns * 2 : pinDowns;

        if (this.totalScore >= 10) {
            this.isItSpare = true;
        }
    }

    score(): number {
        return this.totalScore;
    }
}
