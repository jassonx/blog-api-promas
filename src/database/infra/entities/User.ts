import * as bcrypt from 'bcrypt';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../../domain/entities/IUser';
import { Post } from './Post';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 150 })
  public name: string;

  @OneToMany(() => Post, (post) => post.user, {
    cascade: true,
  })
  posts: Post[];

  @Column()
  password: string;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }

  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  public updatedAt!: Date;
}
