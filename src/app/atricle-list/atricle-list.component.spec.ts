import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtricleListComponent } from './atricle-list.component';

describe('AtricleListComponent', () => {
  let component: AtricleListComponent;
  let fixture: ComponentFixture<AtricleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtricleListComponent]
    });
    fixture = TestBed.createComponent(AtricleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
