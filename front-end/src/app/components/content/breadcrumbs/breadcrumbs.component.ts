import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: any[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event) => {
      this.breadcrumbs = [{
        label: 'Home',
        url: '/'
      }];
      let currentRoute = this.activatedRoute.root;
      let tmpUrl = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            tmpUrl += '/' + routeSnapshot.url
                            .map(segment => segment.path)
                            .join('/');
            this.breadcrumbs.push({
              label: route.snapshot.data.title,
              url: tmpUrl
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }

  ngOnInit() {
  }

}
