export type Grid = Array<GridRow>;
export type GridRow = Array<any>;

export type Table = Array<TableRow>;
export type TableRow = Array<any>;

/** Translates a grid into a table */
export function unpivotTable_(grid: Grid,
                             columnName: string,
                             valueName: string,
                             fixedColumns: number): Table
{
  if (grid.length == 0) { return [] }

  const gridHeader = grid[0];
  const tableHeader = gridHeader
                        .slice(0, fixedColumns)
                        .concat([columnName, valueName]);
  const names = gridHeader.slice(fixedColumns);

  const tableRows = grid.slice(1).flatMap(row => {
    const constant = row.slice(0, fixedColumns);
    const values = row.slice(fixedColumns);

    return composeRows_(constant, names, values);
  });
  
  return [tableHeader].concat(tableRows);
}

/** Composes a set of table rows.
 *
 * @private
 */
export const composeRows_ = (constant: Array<any>, names: Array<any>, values: Array<any>) =>
  names.map((name, idx) => constant.concat([name, values[idx]]));
