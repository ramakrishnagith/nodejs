import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { KngShellComponent, KngShellState } from 'kinetic-angular';
import { ShellService } from './shell.service';

@Component({
  selector: 'tmhna-portal-shell',
  templateUrl: './template/shell.component.html',
  styleUrls: ['./template/shell.component.scss']
})
export class ShellComponent implements OnInit {

  get state(): KngShellState {
    return this.service.state;
  }
  @Input('state') set state(value: KngShellState) {
    this.service.updateState(value);
  }

  @ViewChild('kngShellComponent') shell!: KngShellComponent;

  constructor(
    private service: ShellService
  ) { }

  ngOnInit(): void {
    this.service.stateObservable$.subscribe(value => {
      console.log(`my next is`, [value, this]);
    })
  }

}
