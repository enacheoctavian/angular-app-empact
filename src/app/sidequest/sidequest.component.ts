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
  //function that gets called every time the ,,Parse" button is pressed
  //formats the input the the way we want and checks if the input was the right format
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
    if (isNaN(chars[0]) || isNaN(chars[1]) || isNaN(chars[2])) {
      alert("Invalid format");
      return;
    }
    else
      this.svp.push(temp);
  }

}
