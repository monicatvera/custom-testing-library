import { expect, describe, it} from "./testLib";
import { average, sum } from "./stats";
import * as statsAsync from "./statsAsync"

let result, expected;

describe('Stats should', () => { 

    it("calculate the sum of all element of the array", () => {
        result = sum([1,2,3]);
        expected = 6;
        expect(result).toBe(expected);
    })

    it("calculate the average of all element of the array", () => {
        result = average([1,2,3]);
        expected = 2;
        expect(result).toBe(expected);
    })

})

describe("Async stats should",() =>{
    it("calculate the sum of all element of the array (async)", async () => {
        result = await statsAsync.sum([1,2,3]);
        expected = 6;
        expect(result).toBe(expected);
    })

    it("calculate the average of all element of the array (async)", async () => {
        result = await statsAsync.average([1,2,3]);
        expected = 2;
        expect(result).toBe(expected);
    })
})