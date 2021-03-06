import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendCodeService } from './../friend-code.service';
import { friendCode } from './../friendCode.model';

@Component({
  selector: 'app-friend-code-delete',
  templateUrl: './friend-code-delete.component.html',
  styleUrls: ['./friend-code-delete.component.css']
})
export class FriendCodeDeleteComponent implements OnInit {

  friendCode!: friendCode

  constructor(private friendCodeService: FriendCodeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.friendCodeService.readById(id).subscribe(friendCode => {
      this.friendCode = friendCode;
    })
  }

  deleteFriendCode(): void {
    this.friendCodeService.delete(this.friendCode.id).subscribe(() => {
      this.friendCodeService.showMessage('Informação excluida com sucesso!');
      this.router.navigate(['/']);
    })
  }

  cancel(): void {
    this.router.navigate(['/']);

  }

}

