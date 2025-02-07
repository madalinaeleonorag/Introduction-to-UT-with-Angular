import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  @Input() textReceived: string = '';

  public ngOnInit(): void {
    console.log(this.checkIfTextLonger(this.textReceived));
  };

  public checkIfTextLonger(text: string): boolean {
    if (text.length > 10) {
      return true;
    } else {
      return false;
    }
  }
}
