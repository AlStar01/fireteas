import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewDetailComponent } from './brew-detail.component';

import { SharedModule } from '../../shared/shared.module';

describe('BrewDetailComponent', () => {
  let component: BrewDetailComponent;
  let fixture: ComponentFixture<BrewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ BrewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
