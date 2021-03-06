import { Component, OnInit } from '@angular/core';
import { friendCode } from '../friendCode.model';
import { FriendCodeService } from './../friend-code.service';

import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-friend-code-read',
  templateUrl: './friend-code-read.component.html',
  styleUrls: ['./friend-code-read.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class FriendCodeReadComponent implements OnInit {

  friendCodes: friendCode[] = [];
  displayedColumns = ['id', 'plataform', 'name', 'code', 'action'] 

  
  constructor(private friendCodeService: FriendCodeService) { }

  ngOnInit(): void {
    this.friendCodeService.read().subscribe(friendCodes => {
      this.friendCodes = friendCodes
      console.log(friendCodes)
    })
  }


}
