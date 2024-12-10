import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVOverviewComponent } from './cv-overview.component';

describe('CVOverviewComponent', () => {
  let component: CVOverviewComponent;
  let fixture: ComponentFixture<CVOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CVOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CVOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
