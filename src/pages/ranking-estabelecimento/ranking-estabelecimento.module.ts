import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankingEstabelecimentoPage } from './ranking-estabelecimento';

@NgModule({
  declarations: [
    RankingEstabelecimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(RankingEstabelecimentoPage),
  ],
  exports: [
    RankingEstabelecimentoPage
  ]
})
export class RankingEstabelecimentoPageModule {}
