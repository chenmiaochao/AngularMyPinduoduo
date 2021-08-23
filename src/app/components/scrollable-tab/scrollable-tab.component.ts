import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

interface AddFunc{
  (x: number, y: number): number
}


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  title = 'myPinduoduo';
  selectedIndex = -1;
  @Input() menus: TopMenu[] = []
  @Output() tabSelected = new EventEmitter()

  handlerSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
  constructor() { }

  ngOnInit(): void {
  }

}
