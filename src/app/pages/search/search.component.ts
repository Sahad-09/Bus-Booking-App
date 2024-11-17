import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ILocations } from '../../model/interface/search';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  locationsList$: Observable<ILocations[]> = new Observable<ILocations[]>
  masterService = inject(MasterService)



  ngOnInit(): void {
    this.getAllLocations()
  }

  getAllLocations() {
    return this.locationsList$ = this.masterService.getLocations()
  }


}
