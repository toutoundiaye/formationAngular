import {Component, OnInit} from '@angular/core';
import {PromobseService} from '../promobse.service';

@Component({
  selector: 'app-promobse',
  templateUrl: './promobse.component.html',
  styleUrls: ['./promobse.component.css'],
  providers: [PromobseService]
})
export class PromobseComponent implements OnInit {

  numbers: number[] = [];
  obsNumbers: number[] = [];

  progressString = '0% ';
  disabled = false;

  message: string = null;
  wait: string = null;

  constructor(private promobse: PromobseService) {
  }

  ngOnInit() {
  }

  public getAsyncNumbers(): void {
    this.numbers = [];

    this.message = null;
    this.wait = 'Synchronisation en cours ...';

    this.promobse.getPromiseNumber().then((numbers: number[]) => {
      this.numbers = numbers;
      this.wait = null;
    }).catch((message: string) => {
      this.message = message;
      this.wait = null;
    });
  }

  public getMultiNumbers(): void {
    this.promobse.getObservableNumber().subscribe((numbers) => {
      this.obsNumbers = numbers;
    }, () => {
    }, () => {
    });
  }

  public download(): void {
    this.progressString = '0%';
    this.disabled = true;

    setTimeout(() => {
      this.promobse.observableDownload().subscribe((number: number) => {
        this.progressString = `${number}%`;
      }, () => {
      }, () => {
        this.disabled = false;
      });
    }, 500);

  }
}
