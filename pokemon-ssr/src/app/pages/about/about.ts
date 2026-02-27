import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: 'about.html',
  styleUrl: 'about.css',
})
export default class About implements OnInit {
  private readonly _title = inject(Title);
  ngOnInit(): void {
    this._title.setTitle('About Page');
  }
}
