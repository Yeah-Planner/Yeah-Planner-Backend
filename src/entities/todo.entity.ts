import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryColumn()
  id: string;

  @Column()
  owner: string;

  @Column()
  title: string;

  @Column()
  completed: boolean;

  @Column({ type: 'longtext' })
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
