import {BowlingGame} from "./bowling-game";

describe('BowlingGame', () => {
    it('should return score of 2 after 2 first rolls of 1', () => {
        const bowling = new BowlingGame();

        bowling.roll(1);
        bowling.roll(1);

        expect(bowling.score()).toBe(2);
    });

    it('should return score of 14 after a spare and a roll of 2 then 4', () => {
        const bowling = new BowlingGame();

        bowling.roll(7);
        bowling.roll(3);
        bowling.roll(2);
        bowling.roll(4);

        expect(bowling.score()).toBe(18);
    });

    it('should return score of 20 after a strike and a roll of 2 and then 3', () => {
        const bowling = new BowlingGame();

        bowling.roll(10);
        bowling.roll(2);
        bowling.roll(3);

        expect(bowling.score()).toBe(20);
    });
});
