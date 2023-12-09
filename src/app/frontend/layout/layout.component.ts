import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from './layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  private getCharactersSub!: Subscription;

  constructor(
    public layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.getCharactersSub = this.layoutService.getAllCharacters().subscribe({
      next: (response: any) => {
        console.log(response.results);
        this.layoutService.characters = response.results;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.getCharactersSub) {
      this.getCharactersSub.unsubscribe();
    }
  }
}
