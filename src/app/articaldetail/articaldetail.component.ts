import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blog } from '../Model/blog';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-articaldetail',
  templateUrl: './articaldetail.component.html',
  styleUrls: ['./articaldetail.component.css']
})
export class ArticaldetailComponent implements OnInit {
  blogdetails : blog ;
  constructor(private activatedroute:ActivatedRoute , private bs : BlogService) { }

  ngOnInit(): void {
    this.bs.getBlogbyId(this.activatedroute.snapshot.params.id).subscribe(data=>this.blogdetails=data) ;
  }

}
