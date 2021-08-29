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
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px'
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef | undefined;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewChecked():void{
    let i = 0;
    // 每两秒设置scrollLeft 往左拨动 , 值为scrollWidth/slider数组的长度
    setInterval(() => {
      this.rd2.setProperty(this.imgSlider?.nativeElement, 'scrollLeft', ++i * this.imgSlider?.nativeElement.scrollWidth / this.sliders.length)
    }, this.intervalBySeconds*1000)
  }
}
