import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public searchData(value) {
    this.search.emit(value);
  }

}
