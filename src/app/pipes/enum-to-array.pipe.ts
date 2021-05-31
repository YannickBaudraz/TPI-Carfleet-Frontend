import { Pipe, PipeTransform } from '@angular/core';
import { LiteralObject } from '../core/models/literal-object';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(object: LiteralObject): Array<{ key: string, value: string }> {
    const keys = Object.keys(object);
    return keys.map(key => {
      return { key, value: Object(object)[key] };
    });
  }

}
