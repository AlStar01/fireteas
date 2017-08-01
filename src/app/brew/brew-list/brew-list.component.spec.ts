import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdGridListModule } from '@angular/material';

import { BrewListComponent } from './brew-list.component';

xdescribe('BrewListComponent', () => {
  let component: BrewListComponent;
  let fixture: ComponentFixture<BrewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdGridListModule],
      declarations: [ BrewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
