import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedTreeControl } from '@angular/cdk/tree';

export type Classification = {
  name: string, children: Classification[]
};

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css', './main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  data: Classification[] = [
    {
      name: "animalia",
      children: [
        {
          name: "dog",
          children: [
            {
              name: "poodle",
              children: []
            },
            {
              name: "retriever",
              children: []
            }
          ]
        },
        {
          name: "cat",
          children: [
            {
              name: "tiger",
              children: []
            },
            {
              name: "siamese",
              children: []
            }
          ]
        }
      ]
    }
  ]

  treeControl = new NestedTreeControl<Classification>(node => observableOf(node.children)); 

    editor: any;
    onClick() {
      console.log(this.editor);
    }
}
