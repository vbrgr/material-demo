import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = true;
  minDate = new Date(2017, 0, 1);
  maxDate = new Date(2019, 0, 1);
  colors = [
    {id: 1, name: 'green'},
    {id: 2, name: 'blue'},
    {id: 3, name: 'yellow'},
    {id: 4, name: 'red'}
  ];
  color = 2;
  categories = [
    { name: 'Beginner' },
    { name: 'Intermidiate' },
    { name: 'Advanced' }
  ];
  onChange(e) {
    console.log(e);
  }
  selectCategory(category) {
    this.categories
    .filter(c => c !== category)
    .forEach(c => c['selected'] = false);
    category.selected = !category.selected;
  }
}
