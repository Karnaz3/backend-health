import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('admins')
export class AdminEntity extends BaseEntity {
  @Column({
    name: 'full_name',
  })
  fullName: string;

  @Column({
    name: 'email',
    unique: true,
  })
  email: string;

  @Column({
    name: 'password',
  })
  password: string;

  async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  @BeforeInsert()
  async hashPasswordBeforeInsert(): Promise<void> {
    this.password = await this.hashPassword(this.password);
  }

  toJSON() {
    return {
      ...this,
      password: undefined,
    };
  }
}
