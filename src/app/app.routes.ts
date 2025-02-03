import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    {path:"", redirectTo:"Home",pathMatch:"full" },
    {path:"Home",component:HomeComponent},
    {path:"About",component:AboutComponent},
    {path:"Portofolio",component:PortofolioComponent},
    {path:"Contact",component:ContactComponent},
    {path:"**",component:NotFoundComponent},
];
