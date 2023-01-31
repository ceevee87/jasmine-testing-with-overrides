import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldService } from './hello-world.service';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from 'rxjs';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;
  let mockHelloWorldService;

  beforeEach(() => {
    mockHelloWorldService = jasmine.createSpyObj(['getHelloWorld']);
    mockHelloWorldService.getHelloWorld.and.returnValue(of('Test Message'));
    TestBed.configureTestingModule({
      imports: [],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HelloWorldComponent],
      providers: [
//        HttpClient,
        { provide: HelloWorldService, useValue: mockHelloWorldService }
      ],
    }).compileComponents();

    // TestBed.overrideProvider(HelloWorldService, {
    //   useValue: mockHelloWorldService,
    // });
    // TestBed.compileComponents();

    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    // added this line
    fixture.detectChanges();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HelloWorldComponent);
  //   component = fixture.componentInstance;
  //   mockHelloWorldService.getHelloWorld.and.returnValue(of('Test Message')); // added this line
  //   fixture.detectChanges();
  // });

  it('should create and assign correct value to "helloWorldMessage"', () => {
    expect(component).toBeTruthy();
    expect(component.helloWorldMessage).toEqual('Test Message'); // added this line
  });
});
