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
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['uuid'])
  @Column({ type: 'uuid', length: 36 })
  uuid: string;

  @Unique(['email'])
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ default: '' })
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.bio = '';
    this.uuid = v4();
  }

  toJSON() {
    return {
      ...this,
      password: undefined,
      id: undefined,
    };
  }
}
