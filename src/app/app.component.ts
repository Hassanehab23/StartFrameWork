import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,AboutComponent, FooterComponent, NavBarComponent,NotFoundComponent,PortofolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App23';
}
