import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PartsEnum } from 'src/common/enum/parts.enum';

@Entity('doctor')
export class DoctorEntity extends BaseEntity {
  @Column({
    name: 'full_name',
  })
  fullName: string;

  @Column({
    name: 'specialization',
    default: PartsEnum.ABDOMEN,
    nullable: true,
  })
  specialization: PartsEnum;

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
