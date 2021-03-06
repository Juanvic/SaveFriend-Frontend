import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendCodeService } from './../friend-code.service';
import { friendCode } from './../friendCode.model';

@Component({
  selector: 'app-friend-code-update',
  templateUrl: './friend-code-update.component.html',
  styleUrls: ['./friend-code-update.component.css']
})
export class FriendCodeUpdateComponent implements OnInit {

  friendCode!: friendCode;

  constructor(private friendCodeService: FriendCodeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.friendCodeService.readById(id).subscribe(friendCode => {
      this.friendCode = friendCode;
    });
  }

  updateFriendCode ():void {
    this.friendCodeService.update(this.friendCode).subscribe(() => {
      this.friendCodeService.showMessage('Informação atualizada com sucesso!')
      this.router.navigate(['/']);
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
