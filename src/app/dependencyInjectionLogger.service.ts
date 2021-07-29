import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DependencyInjectionLogger {
  writeLog(count: number) {
    console.log(count);
  }
}
