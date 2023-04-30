import { Component } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  githubSearchForm = new FormGroup({
    search: new FormControl(''),
  });

  onSubmit() {
    console.log('values: ', this.githubSearchForm.value.search)
  }
}
