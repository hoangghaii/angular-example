import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbIconModule,
  NbInputModule,
} from '@nebular/theme';

@NgModule({
  exports: [
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class NebularUIModule {}
