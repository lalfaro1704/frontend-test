import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"ischecked"
})

export class IsChecked implements PipeTransform {
  transform(value: any, exclutions: any, id_preparation: string): boolean {
    for (const exclution of exclutions){
        if (exclution.id_preparation === id_preparation){
            var index = exclution.ingredients.indexOf(String(value));
            if (index !== -1) {
                return true;
            }
        }
    }
    
    return false;
  }
}