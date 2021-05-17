import { Ng2SmartTableComponent } from 'ng2-smart-table';
import { LiteralObject } from '../literal-object';

/**
 * A Row of {@link Ng2SmartTableComponent}.
 */
export interface RowSmartTable {
  /**
   * Data of the last selected object.
   */
  data: LiteralObject;

  /**
   * If the row is selected.
   */
  isSelected: boolean;

  /**
   * Objects selected in the table.
   */
  selected: Array<LiteralObject>;

  /**
   * Data source of the table.
   */
  source: LiteralObject;
}
