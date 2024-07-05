import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { SexEnum } from 'src/common/enum/event.users.enum';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({
    name: 'full_name',
  })
  fullName: string;

  @Column({
    name: 'age',
  })
  age: number;

  @Column({
    name: 'gender',
    default: SexEnum.MALE,
    nullable: true,
  })
  gender: SexEnum;

  @Column({
    name: 'email',
    unique: true,
  })
  email: string;

  @Column({
    name: 'password',
  })
  password: string;

  // comparePassword
  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }

  // hashPassword
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  @BeforeInsert()
  async hashPasswordBeforeInsert(): Promise<void> {
    console.log('base entity');
    this.password = await this.hashPassword(this.password);
  }

  toJSON() {
    return {
      ...this,
      password: undefined,
    };
  }
}
