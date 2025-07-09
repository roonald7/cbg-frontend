import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.css'
})
export class MemberFormComponent {
  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private router: Router) {
    this.memberForm = this.fb.group({
      nome: ['', Validators.required],
      nascimento: ['', Validators.required],
      funcao: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.memberForm.valid) {
      const formValue = this.memberForm.value;

      // Se quiser mapear os nomes dos campos para o DTO da API (ex: nascimento -> dataNascimento):
      const pessoa = {
        nome: formValue.nome,
        dataNascimento: formValue.nascimento
      };

      this.memberService.createMember(pessoa).subscribe({
        next: () => {
          alert('Membro cadastrado com sucesso!');
          this.router.navigate(['/membros']);
        },
        error: (err) => {
          console.error('Erro ao salvar:', err);
          alert('Erro ao salvar. Verifique a API.');
        }
      });

      this.memberForm.reset();
    } else {
      this.memberForm.markAllAsTouched();
    }
  }
}
