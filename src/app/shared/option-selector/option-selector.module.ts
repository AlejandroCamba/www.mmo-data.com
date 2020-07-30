import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { OptionWrapperComponent } from './components/option-wrapper/option-wrapper.component';



@NgModule({
  declarations: [OptionSelectorComponent, OptionWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [OptionSelectorComponent, OptionWrapperComponent]
})
export class OptionSelectorModule { }
