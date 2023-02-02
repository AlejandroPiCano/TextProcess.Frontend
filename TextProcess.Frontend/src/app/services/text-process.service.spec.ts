import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TextProcessService } from './text-process.service';
import { Observable, of } from 'rxjs';
import { TextStatisticsDTO } from '../models/TextStatisticsDTO';

describe('TextProcessService', () => {
  let service: TextProcessService;
  let httpClientSpy: {
    post: jasmine.Spy,
    put: jasmine.Spy,
    delete: jasmine.Spy,
    get: jasmine.Spy,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TextProcessService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'post',
      'put',
      'get',
      'delete',
    ]);
    service = new TextProcessService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

//GET

  //GetOrderOptions should the response No Errors
  it('GetOrderOptions should the response No Errors', (done: DoneFn) => {
    const mockResultCreate: string [] = ['Asc', 'Desc'];
    httpClientSpy.get.and.returnValue(of(mockResultCreate));

    service
      .GetOrderOptions()
      .subscribe({next: (res) => expect(res).toEqual(mockResultCreate)});
    done();
  });

  //GetOrderOptions should the response No Errors
  it('GetOrderOptions should the response Errors', (done: DoneFn) => {
    const mockResultCreate = {
      error: "Error exception",
    };
    httpClientSpy.get.and.returnValue(of(mockResultCreate));

    service
      .GetOrderOptions()
      .subscribe({error: (res) => expect(res).toEqual(mockResultCreate)});
    done();
  });

  //POST GetOrderedText

   //GetOrderedText should the response No Errors
   it('GetOrderedText should the response No Errors', (done: DoneFn) => {
    const mockResultCreate: string [] = ["apple", "orange", "red"];
    httpClientSpy.post.and.returnValue(of(mockResultCreate));

    service
      .GetOrderedText("red apple orange", "AlphabeticAsc")
      .subscribe({next: (res) => expect(res).toEqual(mockResultCreate)});
    done();
  });

  //GetOrderedText should the response No Errors
  it('GetOrderedText should the response Errors', (done: DoneFn) => {
    const mockResultCreate = {
      error: "Error exception",
    };
    httpClientSpy.post.and.returnValue(of(mockResultCreate));

    service
    .GetOrderedText("red apple orange", "AlphabeticAsc")
      .subscribe({error: (res) => expect(res).toEqual(mockResultCreate)});
    done();
  });


//POST GetStatisticsText

   //GetStatisticsText should the response No Errors
   it('GetStatisticsText should the response No Errors', (done: DoneFn) => {
    const mockResultCreate: TextStatisticsDTO = new TextStatisticsDTO(2,3,1);
    httpClientSpy.post.and.returnValue(of(mockResultCreate));

    service
      .GetStatisticsText("red apple orange-")
      .subscribe({next: (res) => expect(res).toEqual(mockResultCreate)});
    done();
  });

  //GetOrderedText should the response No Errors
  it('GetOrderedText should the response Errors', (done: DoneFn) => {
    const mockResultCreate = {
      error: "Error exception",
    };
    httpClientSpy.post.and.returnValue(of(mockResultCreate));

    service
      .GetStatisticsText("red apple orange-")
      .subscribe({error: (res) => expect(res).toEqual(mockResultCreate)});
    done();
  });



});
