import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
})
export default class Contact implements OnInit {
  private readonly _title = inject(Title);
  ngOnInit(): void {
    this._title.setTitle('Contact Page');
  }
}
