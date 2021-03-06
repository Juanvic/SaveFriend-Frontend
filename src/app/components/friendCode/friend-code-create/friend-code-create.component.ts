import { friendCode } from './../friendCode.model';
import { FriendCodeService } from './../friend-code.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-code-create',
  templateUrl: './friend-code-create.component.html',
  styleUrls: ['./friend-code-create.component.css']
})
export class FriendCodeCreateComponent implements OnInit {

  friendCode: friendCode = {
    plataform: '',
    name: '',
    code: ''
  }
  
  constructor(private friendCodeService: FriendCodeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createFriendCode(): void {
    this.friendCodeService.create(this.friendCode).subscribe(() => {
      this.friendCodeService.showMessage('Informação salva com sucesso!')
      this.router.navigate([''])
    } )
    
  }
  
  cancel(): void {
    this.router.navigate([''])
  }

}
