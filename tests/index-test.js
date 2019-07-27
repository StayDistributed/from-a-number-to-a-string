import expect from "expect";

import Fantas from "../src";

const fanta = new Fantas();
const numberToEnglish = fanta.transform;

describe("Module template", () => {
  it("Correctly transform numbers", () => {
    expect(() => numberToEnglish(NaN)).toThrow();
    expect(numberToEnglish(0)).toEqual("zero", "0 -> zero");

    expect(numberToEnglish(1)).toEqual("one", "1 -> one");
    expect(numberToEnglish(5)).toEqual("five", "5 -> five");
    expect(numberToEnglish(10)).toEqual("ten", "10 -> ten");
    expect(numberToEnglish(11)).toEqual("eleven", "11 -> eleven");
    expect(numberToEnglish(12)).toEqual("twelve", "12 -> twelve");
    expect(numberToEnglish(18)).toEqual("eighteen", "18 -> eighteen");
    expect(numberToEnglish(20)).toEqual("twenty", "20 -> twenty");
    expect(numberToEnglish(19000)).toEqual(
      "nineteen thousand",
      "19000 -> nineteen thousand"
    );
    expect(numberToEnglish(319000)).toEqual(
      "three hundred and nineteen thousand",
      "319000 -> don't forget the 'and'"
    );
    expect(numberToEnglish(1000000)).toEqual(
      "one million",
      "1000000 -> one million"
    );
    expect(numberToEnglish(1000001)).toEqual(
      "one million and one",
      "1000001 -> one million and one"
    );
    expect(numberToEnglish(1011011)).toEqual(
      "one million eleven thousand and eleven",
      "1011011 -> one million eleven thousand and eleven"
    );
    expect(numberToEnglish(1101101)).toEqual(
      "one million one hundred and one thousand one hundred and one",
      "all the ands"
    );
    expect(numberToEnglish(-6000006)).toEqual("negative six million and six");
    expect(numberToEnglish(100023999)).toEqual(
      "one hundred million twenty-three thousand nine hundred and ninety-nine"
    );
    expect(numberToEnglish(3.14159)).toEqual(
      "three point one four one five nine",
      "Decimal numbers count each digit"
    );
    expect(numberToEnglish(0.0001)).toEqual(
      "zero point zero zero zero one",
      "Include leading zeroes in decimals"
    );
    expect(numberToEnglish(-65721.55531)).toEqual(
      "negative sixty-five thousand seven hundred and twenty-one point five five five three one"
    );
    expect(numberToEnglish(32.89)).toEqual("thirty-two point eight nine");
    expect(numberToEnglish("6")).toEqual(
      "six",
      "strings that evaluate to numbers are ok"
    );
    expect(numberToEnglish(Number.POSITIVE_INFINITY)).toEqual(
      "infinity",
      "positive infinity"
    );
    expect(numberToEnglish(Number.NEGATIVE_INFINITY)).toEqual(
      "negative infinity",
      "negative infinity"
    );
    expect(numberToEnglish(-50)).toEqual(
      "negative fifty",
      "Negative numbers should include the word 'negative' before the first digit."
    );
    expect(numberToEnglish(568372657465895665)).toEqual("Out of range");
  });
});
