import { describe, expect, it } from "vitest";
import { FirstOrSecond } from "/main.js";
import { sum } from "/main.js";
import { reverse } from "/main.js";
import { palindrome } from "/main.js";
import { factoriel } from "/main.js";
import { unique } from "/main.js";
import { sumPair } from "/main.js";
import { filter } from "/main.js";
import { Voyelles } from "./main.js";
import { twoDimensions } from "./main.js";
import { index } from "./main.js";
import { premier } from "./main.js";
import { reverseOrder } from "./main.js";
import { DeuxiemePlusGrand } from "./main.js";
import { anagramme } from "./main.js";


describe("verifier", () => {
    it("c", () => {
        expect(FirstOrSecond(6, 15)).toBe(false)

    })
})

describe("calculer", () => {
    it("addition", () => {
        expect(sum(125)).toBe(3)

    })
})


describe("reverse", () => {
    it("addition", () => {
        expect(reverse("test")).toBe("tset")

    })
})


describe("palindrome", () => {
    it("c", () => {
        expect(palindrome("test")).toBe(false)

    })
})


// describe("factoriel", () => {
//     it("c", () => {
//         expect(factoriel(5)).toBe(120)

//     })
// })

describe("unique", () => {
    it("c", () => {
        expect(unique("hopital")).toBe(true)

    })
})


describe("sommepair", () => {
    it("c", () => {
        expect(sumPair([2, 8, 6, 3, 7])).toBe(16)

    })
})


describe("filter", () => {
    it("c", () => {
        expect(filter([3, 5, 7, 3, 1, 3, 5], 3)).toStrictEqual([5, 7, 1, 5])

    })
})


describe("filter", () => {
    it("c", () => {
        expect(Voyelles("bonjour")).toStrictEqual(3)

    })
})

describe("little", () => {
    it("c", () => {
        expect(twoDimensions([[1, 2, 3], [5, 6, 7], [39, -23, 0]])).toBe(-23)

    })
})


describe("index", () => {
    it("c", () => {
        expect(index(3, [3, 5, 3, 6])).toStrictEqual([0, 2])

    })
})

describe("premier", () => {
    it("c", () => {
        expect(premier(11)).toBe(true)

    })
})


describe("reverseOrder", () => {
    it("c", () => {
        expect(reverseOrder("oui et toi patrick")).toBe("toi et oui")

    })
})


describe("DeuxièmePlusGrand", () => {
    it("c", () => {
        expect(DeuxiemePlusGrand([5, 6, 2, 9, 23])).toBe(9)

    })
})

// describe("anagramme", () => {
//     it("c", () => {
//         expect(anagramme("La crise économique", "Le scénario comique")).toBe(true)

//     })
// })
