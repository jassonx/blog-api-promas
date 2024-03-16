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
import { Role } from '../../../common/enums/user.enum';
import { IUser } from '../../domain/entities/IUser';
import { Post } from './Post';

@Entity('users')
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

  @Column({ type: 'enum', enum: Role, nullable: true, default: Role.USER })
  public role: Role;

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
