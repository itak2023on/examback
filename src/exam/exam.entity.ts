import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Question extends Model {
  @Column
  Qtext: string;

  @Column
  trueNum: number;

  @Column
  isMulti: string;
}