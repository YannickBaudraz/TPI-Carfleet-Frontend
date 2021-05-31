import { Pipe, PipeTransform } from '@angular/core';
import { GenderEnum } from '../core/enums/gender.enum';

/**
 * A pipe to transform a gender enum to an human readable string.
 */
@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  /**
   * Transform a gender enum to an human readable string.
   *
   * @param value - The enum
   */
  transform(value: GenderEnum): string {
    return value === GenderEnum.M ? 'Homme' : 'Femme';
  }

}
