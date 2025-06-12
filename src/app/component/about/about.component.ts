import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';

import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  onMouseEnter(): void {
    gsap.fromTo(
      '.cls-1',
      {
        drawSVG: '0%',
      },
      {
        drawSVG: `0% 100%`,
        duration: 2,
      }
    );
  }
}
