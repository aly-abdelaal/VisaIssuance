import { Component, OnInit,  Input  } from '@angular/core';
import { ProcessingStatus } from '../../../services/application/application.model';

@Component({
  selector: 'app-application-state-icon',
  templateUrl: './application-state-icon.component.html',
  styleUrls: ['./application-state-icon.component.scss']
})
export class ApplicationStateIconComponent implements OnInit {

  @Input() status: ProcessingStatus;

  constructor() { }

  ngOnInit(): void {
  }
}
