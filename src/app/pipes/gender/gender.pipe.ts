import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../../core/enums/gender';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    return value === Gender.M ? 'Homme' : 'Femme';
  }

}
