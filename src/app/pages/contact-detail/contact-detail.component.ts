import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  id: any | undefined;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void{
    this.route.params.subscribe(
      (params: any) => {
        if(params.id){
          this.id = params.id;
        }
      }
    )
  }
}
