import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log("Submit")
  }

}
