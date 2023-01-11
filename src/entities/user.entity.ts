import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Contact } from "./contact.entity";
import { Pet } from "./pet.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(() => Pet, (pet) => pet.user, { eager: true })
  pets: Pet[];

  @Column({ nullable: true })
  user_image: string;

  @Column()
  user_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToOne(() => Contact, { eager: true })
  @JoinColumn()
  contact: Contact;
}
