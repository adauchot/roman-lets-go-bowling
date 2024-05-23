import {BowlingGame} from "./bowling-game";

describe('BowlingGame', () => {
    it('should return score of 2 after 2 first rolls of 1', () => {
        const bowling = new BowlingGame();

        bowling.roll(1);
        bowling.roll(1);

        expect(bowling.score()).toBe(2);
    });

    it('should return score of 14 after a spare and a roll of 2', () => {
        const bowling = new BowlingGame();

        bowling.roll(7);
        bowling.roll(3);
        bowling.roll(2);

        expect(bowling.score()).toBe(14);
    })
});
