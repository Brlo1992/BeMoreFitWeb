import ArrayHelper from './ArrayHelper.js';

it("Empty array - should return false", () => {
    let arrayHelper = new ArrayHelper();
    let emptyArray = [];
    expect(arrayHelper.noEmpty(emptyArray), false)
})

it("Not empty array - should return true", () => {
    let arrayHelper = new ArrayHelper();
    let emptyArray = ["dawid"];
    expect(arrayHelper.noEmpty(emptyArray), false)
})

it("Undefined - should return false", () => {
    let arrayHelper = new ArrayHelper();
    expect(arrayHelper.noEmpty(undefined), false)
})

it("Pass object - should return false", () => {
    let arrayHelper = new ArrayHelper();
    expect(arrayHelper.noEmpty({}), false)
})

it("Copy array, array as undefined, return undefined", () => {
    let arrayHelper = new ArrayHelper();
    expect(arrayHelper.copyArray(undefined), undefined);
})

it("Copy array, array is array, return copiedArray", () => {
    let arrayHelper = new ArrayHelper();
    expect(arrayHelper.copyArray([1,2,3]), [1,2,3]);
})

it("Copy array, array is empty, return undefined", () => {
    let arrayHelper = new ArrayHelper();
    expect(arrayHelper.copyArray([]), undefined);
})

it("Copy array, array is object, return undefined", () => {
    let arrayHelper = new ArrayHelper();
    expect(arrayHelper.copyArray({id:"10"}), undefined);
})

it("MinThan, array is [12,44,567,8434,1], return 1", () => {
    let arrayHelper = new ArrayHelper();
    expect(arrayHelper.minThan([12,44,567,8434,1]), 1);
})



