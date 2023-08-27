import { unpivotTable_ } from "./unpivot";
import type { Table, Grid } from "./unpivot";

/**
 * Translates a grid-shaped table into a row-shaped table.
 *
 * @param {A1:C4} grid The grid-shaped table. 
 * @param {"column"=} columnName [optional] The name for the new column for the column header. 
 * @param {"value"=} valueName [optional] The name for the new column for the values. 
 * @param {1=} fixedColumns [optional] The number of columns on the left to replicate per row. 
 * @return Unpivoted table from the given range.
 * @customfunction
 */
function unpivot(grid: Grid, columnName: string = "column", valueName: string = "value", fixedColumns: number = 1): Table {
  return unpivotTable_(grid, columnName, valueName, fixedColumns);
}
