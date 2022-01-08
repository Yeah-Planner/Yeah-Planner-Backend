import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  owner: string;

  @Column()
  title: string;

  @Column()
  completed: boolean;

  @Column()
  content: string;

  @Column()
  deadline: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.completed = false;
    this.content = '';
    this.deadline = '';
  }
}
