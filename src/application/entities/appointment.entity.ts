import { PartsEnum } from 'src/common/enum/parts.enum';
import { AppointmentStatusEnum } from 'src/common/enum/report.status.enum';
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DoctorEntity } from './doctor.entity';
import { UserEntity } from './user.entity';

@Entity('appointment')
export class AppointmentEntity extends BaseEntity {
  @Column({
    name: 'part',
    nullable: true,
  })
  part: PartsEnum;

  @Column({
    name: 'description',
  })
  description: string;

  @Column({
    name: 'date',
  })
  date: Date;

  @Column({
    name: 'status',
    nullable: true,
  })
  status: AppointmentStatusEnum;

  @OneToOne(() => UserEntity, { cascade: ['remove', 'soft-remove', 'insert'] })
  user: UserEntity;

  @OneToOne(() => DoctorEntity, { cascade: ['remove', 'soft-remove', 'insert'] })
  doctor: DoctorEntity;
}
