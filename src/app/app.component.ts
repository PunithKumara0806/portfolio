import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { themes, Theme } from './theme';

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  currentTheme: Theme = themes[getRandomInteger(0, themes.length - 1)];
  ngOnInit(): void {
    document.documentElement.style.setProperty(
      '--dark',
      this.currentTheme.dark
    );
    document.documentElement.style.setProperty(
      '--medium',
      this.currentTheme.medium
    );
    document.documentElement.style.setProperty(
      '--light',
      this.currentTheme.light
    );
    document.documentElement.style.setProperty(
      '--highlight',
      this.currentTheme.highlight
    );
  }
}
