import { Routes,RouterModule } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';

const arr : Routes=[
  {path:'',component:ProductdisplayComponent},
  {path:'addproduct',component:ProductaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:'users',component:UserdisplayComponent},
  {path:'signup',component:SignupComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
  {path:'task',component:TaskdisplayComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
