import { LiteralObject } from '../literal-object';

export interface RowSmartTable {
  data: LiteralObject;
  isSelected: boolean;
  selected: Array<LiteralObject>;
  source: LiteralObject;
}
