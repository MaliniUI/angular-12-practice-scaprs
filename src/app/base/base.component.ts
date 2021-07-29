import { Component, OnInit } from '@angular/core';
import { DependencyInjectionLogger } from '../dependencyInjectionLogger.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  title: string = 'My Angular 12 component';
  count = 5;
  fontGreen: string = 'Green';
  fontRed: string = 'Red';
  fontColor: string = this.fontGreen;
  isBtnEnabled: boolean = false;
  myBtnID: string = 'changeColorBtn';
  constructor(private logger: DependencyInjectionLogger) {}

  ngOnInit() {}

  changeFontColor() {
    if (!this.isBtnEnabled) {
      this.fontColor = this.fontRed;
      this.isBtnEnabled = true;
      console.log('font color >' + this.fontColor);
      this.logger.writeLog(this.count);
      this.count++;
    }
  }
}
