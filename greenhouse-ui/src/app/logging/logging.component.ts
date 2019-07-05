import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LogPolicy } from  '../policy';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private dataService : DataService) { }

  log_messages: LogPolicy[];
  error_messages: LogPolicy[];

  ngOnInit() {
    this.dataService.readLogData().subscribe((log_messages: LogPolicy[])=>{
      this.log_messages = log_messages;
    })
    this.dataService.readErrorData().subscribe((error_messages: LogPolicy[])=>{
      this.error_messages = error_messages;
    })
  }

}
