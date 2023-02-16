import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaitemComponent } from './mediaitem.component';

describe('MediaitemComponent', () => {
  let component: MediaitemComponent;
  let fixture: ComponentFixture<MediaitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
