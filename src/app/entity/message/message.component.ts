import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/shared/model/message';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {
  displayedColumns: string[] = ['id','caption','shortText','fullText','amal'];
 messages!:Message[];
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private messageService:MessageService) { }

  ngOnInit() {
this.messageService.getAll().subscribe(
  (success:any)=>{
    this.messages=success;
    console.log(success.content);
    
  }
)
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
