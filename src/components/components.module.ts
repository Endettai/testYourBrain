import { NgModule } from '@angular/core';
import { AdvertisingComponent } from './advertising/advertising';
import { SlideComponent } from './slide/slide';
@NgModule({
	declarations: [AdvertisingComponent,
    SlideComponent],
	imports: [],
	exports: [AdvertisingComponent,
    SlideComponent]
})
export class ComponentsModule {}
