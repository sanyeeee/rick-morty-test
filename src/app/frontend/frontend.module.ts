import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RickMortyIconComponent } from './layout/header/rick-morty-icon/rick-morty-icon.component';
import { NavigationComponent } from './layout/header/navigation/navigation.component';
import { CharacterComponent } from './layout/content/character/character.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    RickMortyIconComponent,
    NavigationComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
