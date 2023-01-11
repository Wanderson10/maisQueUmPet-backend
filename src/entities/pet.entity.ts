import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Info_pet } from "./info_pet.entity";
import { User } from "./user.entity";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  is_adoptable: boolean;

  @Column()
  is_active: boolean;

  @Column()
  age: string;

  @Column()
  gender: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  user_register: string;

  @OneToOne(() => Info_pet, { eager: true })
  @JoinColumn()
  info_pet: Info_pet;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;
}
