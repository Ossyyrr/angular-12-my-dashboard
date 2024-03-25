import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChageDetectionComponent } from './chage-detection.component';

describe('ChageDetectionComponent', () => {
  let component: ChageDetectionComponent;
  let fixture: ComponentFixture<ChageDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChageDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChageDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
