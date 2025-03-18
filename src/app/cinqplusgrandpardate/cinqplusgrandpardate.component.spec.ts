import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinqplusgrandpardateComponent } from './cinqplusgrandpardate.component';

describe('CinqplusgrandpardateComponent', () => {
  let component: CinqplusgrandpardateComponent;
  let fixture: ComponentFixture<CinqplusgrandpardateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinqplusgrandpardateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinqplusgrandpardateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
