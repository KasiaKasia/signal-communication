import { Injectable, signal, WritableSignal } from '@angular/core';
import { IExampleObject } from './models/models';
import { exampleArrayOfObjects } from './data/data';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {
  message: WritableSignal<string> = signal<string>('');
  exampleArrayOfObjects: WritableSignal<IExampleObject[]> = signal<IExampleObject[]>([...exampleArrayOfObjects]);

  setMessage(text: string) {
    this.message.set(text)
  }
  getMessage(): string {
    return this.message()
  }


  findMaxIdInArrayTypes(): number {
    let maxId = 0
    this.exampleArrayOfObjects.update((object: IExampleObject[]) => {
      maxId = Math.max(...object.map(o => o.id))
      return object;
    });
    return maxId
  }

  updateObject(object: IExampleObject) {
    this.exampleArrayOfObjects.update((resObject: IExampleObject[]) => [
      ...resObject, {
        id: this.findMaxIdInArrayTypes() + 1,
        name: object.name,
        description: object.description
      }]
    )
  }

  getObject(): IExampleObject[] {
    return this.exampleArrayOfObjects()
  }
}
