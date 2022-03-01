import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('uuid')
  owner: string;

  @Column()
  year: number;

  @Column()
  month: number;

  @Column()
  day: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
