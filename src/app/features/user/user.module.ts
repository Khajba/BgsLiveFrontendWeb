import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BgsLiveSharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    BgsLiveSharedModule
  ]
})
export class UserModule { }
