import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticaldetailComponent } from './articaldetail.component';

describe('ArticaldetailComponent', () => {
  let component: ArticaldetailComponent;
  let fixture: ComponentFixture<ArticaldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticaldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
