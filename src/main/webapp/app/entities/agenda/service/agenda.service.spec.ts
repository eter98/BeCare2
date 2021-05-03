import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { IAgenda, Agenda } from '../agenda.model';

import { AgendaService } from './agenda.service';

describe('Service Tests', () => {
  describe('Agenda Service', () => {
    let service: AgendaService;
    let httpMock: HttpTestingController;
    let elemDefault: IAgenda;
    let expectedResult: IAgenda | IAgenda[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      service = TestBed.inject(AgendaService);
      httpMock = TestBed.inject(HttpTestingController);

      elemDefault = {
        id: 0,
        horaMedicamento: 0,
      };
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Agenda', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new Agenda()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Agenda', () => {
        const returnedFromService = Object.assign(
          {
            id: 1,
            horaMedicamento: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should partial update a Agenda', () => {
        const patchObject = Object.assign(
          {
            horaMedicamento: 1,
          },
          new Agenda()
        );

        const returnedFromService = Object.assign(patchObject, elemDefault);

        const expected = Object.assign({}, returnedFromService);

        service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PATCH' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Agenda', () => {
        const returnedFromService = Object.assign(
          {
            id: 1,
            horaMedicamento: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Agenda', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });

      describe('addAgendaToCollectionIfMissing', () => {
        it('should add a Agenda to an empty array', () => {
          const agenda: IAgenda = { id: 123 };
          expectedResult = service.addAgendaToCollectionIfMissing([], agenda);
          expect(expectedResult).toHaveLength(1);
          expect(expectedResult).toContain(agenda);
        });

        it('should not add a Agenda to an array that contains it', () => {
          const agenda: IAgenda = { id: 123 };
          const agendaCollection: IAgenda[] = [
            {
              ...agenda,
            },
            { id: 456 },
          ];
          expectedResult = service.addAgendaToCollectionIfMissing(agendaCollection, agenda);
          expect(expectedResult).toHaveLength(2);
        });

        it("should add a Agenda to an array that doesn't contain it", () => {
          const agenda: IAgenda = { id: 123 };
          const agendaCollection: IAgenda[] = [{ id: 456 }];
          expectedResult = service.addAgendaToCollectionIfMissing(agendaCollection, agenda);
          expect(expectedResult).toHaveLength(2);
          expect(expectedResult).toContain(agenda);
        });

        it('should add only unique Agenda to an array', () => {
          const agendaArray: IAgenda[] = [{ id: 123 }, { id: 456 }, { id: 1339 }];
          const agendaCollection: IAgenda[] = [{ id: 123 }];
          expectedResult = service.addAgendaToCollectionIfMissing(agendaCollection, ...agendaArray);
          expect(expectedResult).toHaveLength(3);
        });

        it('should accept varargs', () => {
          const agenda: IAgenda = { id: 123 };
          const agenda2: IAgenda = { id: 456 };
          expectedResult = service.addAgendaToCollectionIfMissing([], agenda, agenda2);
          expect(expectedResult).toHaveLength(2);
          expect(expectedResult).toContain(agenda);
          expect(expectedResult).toContain(agenda2);
        });

        it('should accept null and undefined values', () => {
          const agenda: IAgenda = { id: 123 };
          expectedResult = service.addAgendaToCollectionIfMissing([], null, agenda, undefined);
          expect(expectedResult).toHaveLength(1);
          expect(expectedResult).toContain(agenda);
        });
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
