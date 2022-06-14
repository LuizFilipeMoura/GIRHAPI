import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojaModule } from './loja/loja.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { CargoModule } from './cargo/cargo.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { TurnoModule } from './turno/turno.module';

@Module({
  imports: [
    LojaModule,
    ColaboradorModule,
    CargoModule,
    TarefaModule,
    TurnoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
