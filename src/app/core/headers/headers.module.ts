import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { OptionSelectorModule } from '../../shared/option-selector/option-selector.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, OptionSelectorModule],
  exports: [HeaderComponent],
})
export class HeadersModule {}
