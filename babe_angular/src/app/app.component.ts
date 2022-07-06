import { Component, OnInit } from '@angular/core'
import { GetTitleService } from './get-title.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ''
  // show = false
  constructor(private getTitleService: GetTitleService) {}

  ngOnInit(): void {
    this.getTitleService.getTitle().subscribe((title: any) => {
      this.title = title
    })
  }
}
