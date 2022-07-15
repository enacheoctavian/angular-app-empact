import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Svp } from './svp.model';

@Component({
  selector: 'app-sidequest',
  templateUrl: './sidequest.component.html',
  styleUrls: ['./sidequest.component.css']
})
export class SidequestComponent {
  svp: Svp[] = [];

  onAddParsingSession(form: NgForm) {
    var input = form.value.input;
    const chars = form.value.input.split(".");
    form.reset();
    var temp = {
      input: input,
      major: chars[0],
      minor: chars[1],
      bugfix: chars[2]
    }


    this.svp.push(temp);
  }

}
