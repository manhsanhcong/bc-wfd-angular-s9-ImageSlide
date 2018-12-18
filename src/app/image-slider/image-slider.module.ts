import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSlideComponent } from './image-slide/image-slide.component';
import { ImageSliderComponent } from './image-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageSliderComponent, ImageSlideComponent],
  exports: [ImageSliderComponent, ImageSlideComponent]
})
export class ImageSliderModule { }