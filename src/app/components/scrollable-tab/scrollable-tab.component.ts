import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
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
/**
 * 接口是可选的，也就说只要有类似 ngOnInit 这样的方法存在
 * 生命周期的钩子函数还是正常执行
 * 但建议实现接口，好处一个是不会由于误删除某个钩子函数
 * 另一个是对组件涉及到哪些生命周期一目了然
 */
export class ScrollableTabComponent implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  title = 'myPinduoduo';
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow'
  @Input() titleColor = 'blue'
  @Input() indecatorColor = "brown"
  @Output() tabSelected = new EventEmitter();

  /**
   * 构造函数永远第一个被调用
   */
  constructor() { }
  /**
   * 在组件的`@input`发生变化时调用
   * @param changes 索引对象 key 是属性的名字, value 是SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("组件输入属性改变", changes)

  }
  /**
   * 组建初始化完成,在这个函数中,我们可以安全的使用
   */
  ngOnInit(): void {
  }

  // ngDoCheck(): void {
  //   console.log("脏值检测")
  // }

  ngAfterContentInit(){
    // console.log("内容初始化")

  }

  ngAfterContentChecked(): void {
    // console.log("内容脏值检测")

  }

  ngAfterViewInit():void{
    // console.log("视图初始化,自己&子组件内容所有")
  }

  ngAfterViewChecked():void{

  }

  handlerSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}
