import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  imports: [CommonModule],
  declarations: [ButtonDirective, AvatarComponent],
})
export class GroundupsNgModule {}
