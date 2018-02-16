import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponent } from './http.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService} from '../user.service';
import { UserMockService } from '../user-mock.service';

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpComponent ],
      imports: [ HttpClientModule ],
    }).overrideComponent(HttpComponent, {
      set: {
        providers: [
          {provide: UserService, useClass: UserMockService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllUser() should return 4 users', () => {
    component.loadUser();
    expect(component.users.length).toEqual(4);
  });
});
