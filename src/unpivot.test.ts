import { unpivotTable, composeRows } from "./unpivot";


describe("unpivotTable", () => {
  test("empty grid", () => {
    const expected = [];

    expect(unpivotTable([], "column", "value", 1)).toEqual(expected);
  });
  
  test("2x2, 2 fixed", () => {
    const actual = [
      ["Drink", "Season", "Montgomery Burns", "Waylon Smithers"],
      ["Coffee", "Summer", 1, 3],
      ["Tea", "Summer", 1, 5],
    ];
    const expected = [
      ["Drink", "Season", "Person", "Score"],
      ["Coffee", "Summer", "Montgomery Burns", 1],
      ["Coffee", "Summer", "Waylon Smithers", 3],
      ["Tea", "Summer", "Montgomery Burns", 1],
      ["Tea", "Summer", "Waylon Smithers", 5],
    ];

    expect(unpivotTable(actual, "Person", "Score", 2)).toEqual(expected);
  });
});

describe("composeRows", () => {
  test("produce one row", () => {
    const constant = ["Apple"];
    const names = ["Montgomery Burns"];
    const values = [3];
    const expected = [
      ["Apple", "Montgomery Burns", 3],
    ];

    expect(composeRows(constant, names, values)).toEqual(expected);
  });

  test("produce two rows", () => {
    const constant = ["Apple", "Juice"];
    const names = ["Montgomery Burns", "Waylon Smithers"];
    const values = [3, 5];
    const expected = [
      ["Apple", "Juice", "Montgomery Burns", 3],
      ["Apple", "Juice", "Waylon Smithers", 5],
    ];

    expect(composeRows(constant, names, values)).toEqual(expected);
  });  

});