import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Answer extends Model {
  @Column
  Atext: string;

  @Column
  Qid: number;

  @Column
  pt: string;
}