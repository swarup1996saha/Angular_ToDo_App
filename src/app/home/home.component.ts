import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
   console.log(`From Snapshot ${activatedRoute.snapshot.paramMap.get('name')}`)
   activatedRoute.paramMap.subscribe(item=>{
    console.log(`From paramMap ${item.get('name')}`)
   })
  }

  ngOnInit(): void {
  }

}
