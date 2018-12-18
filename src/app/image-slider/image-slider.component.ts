import { Component, OnInit, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { ImageSlideComponent } from './image-slide/image-slide.component';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageSliderComponent implements OnInit {
  @ContentChildren(ImageSlideComponent) slides: QueryList<ImageSlideComponent>;
  component;
  activeIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previos() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
  next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

}
