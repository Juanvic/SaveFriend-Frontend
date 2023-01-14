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

  friendCodeLocal: any;

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
      localStorage.setItem(this.friendCode.name, 'nome')
      localStorage.setItem(this.friendCode.code, 'código')
      localStorage.setItem(this.friendCode.plataform, 'plataforma')
      console.log(this.friendCode.code + this.friendCode.name + this.friendCode.plataform)
      this.friendCodeService.showMessage('Informação salva com sucesso!')
      this.router.navigate([''])
    } )
    
  }
  
  copyExport(){
    this.friendCodeLocal = localStorage.getItem(this.friendCode.name);
    alert(localStorage.getItem(this.friendCode.plataform))
  }
  
  cancel(): void {
    this.router.navigate([''])
  }

}
