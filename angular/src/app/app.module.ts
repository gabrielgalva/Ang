import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListItemsComponent,
    FormCadastroComponent,
    FormLoginComponent,
    AreaLogadaComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    DadosAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
