import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBetComponent } from './sidebar-bet.component';

describe('SidebarBetComponent', () => {
  let component: SidebarBetComponent;
  let fixture: ComponentFixture<SidebarBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarBetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
