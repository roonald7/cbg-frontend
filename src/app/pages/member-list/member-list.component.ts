import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ importa o módulo com ngFor, ngIf
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    console.log('Carregando membros');
    this.memberService.getMembers().subscribe({
      next: (data) => this.members = data,
      error: (err) => console.error('Erro ao carregar membros', err)
    });
  }
}
