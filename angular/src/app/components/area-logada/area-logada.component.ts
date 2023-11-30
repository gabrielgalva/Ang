
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.css']
})
export class AreaLogadaComponent implements OnInit {
  email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }
  voltarParaLogin(): void {
 
    this.router.navigate(['/login']);
  }
}
