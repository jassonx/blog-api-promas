import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IPost } from '../../domain/entities/IPost';
import { User } from './User';

@Entity({ name: 'posts' })
export class Post extends BaseEntity implements IPost {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 150 })
  public title: string;

  @Column({ length: 350 })
  public content: string;

  @Column()
  public userId: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'userId' })
  user?: User;

  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  public updatedAt!: Date;
}
