import { AfterViewInit, OnDestroy } from '@angular/core';
import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit ,OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px'
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId:any;
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef | undefined;
  constructor(private rd2: Renderer2) { }
  ngAfterViewInit(): void {
        // 每两秒设置scrollLeft 往左拨动 , 值为scrollWidth/slider数组的长度
        this.intervalId = setInterval(() => {
          this.rd2.setProperty(
            this.imgSlider?.nativeElement,
            'scrollLeft',
              (this.getIndex(++this.selectedIndex)) * this.imgSlider?.nativeElement.scrollWidth /
              this.sliders.length);
        }, this.intervalBySeconds*1000)
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number) : number {
    return idx >= 0
      // 如果idx大于0则取余数
      ? idx % this.sliders.length
      // 如果idx小于0, 则 长度 -  idx绝对值 % sliders数组长度取余数
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  // MDN scroll event https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scroll_event
  handleScroll(ev:any){
    // 看每张图的宽度
    const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
}
