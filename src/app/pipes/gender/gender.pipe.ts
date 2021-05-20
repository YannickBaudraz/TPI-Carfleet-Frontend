import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../../core/enums/gender';

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
  transform(value: Gender): string {
    return value === Gender.M ? 'Homme' : 'Femme';
  }

}
