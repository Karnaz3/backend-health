import { ReportSeverityEnum } from 'src/common/enum/report-sevearity.enum';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';

@Entity('report')
export class ReportEntity extends BaseEntity {
  @Column({
    name: 'title',
  })
  title: string;

  @Column({
    name: 'description',
  })
  description: string;

  @Column({
    name: 'severity',
    nullable: true,
  })
  severity: ReportSeverityEnum;

  @ManyToOne(() => UserEntity, { cascade: ['remove', 'soft-remove', 'insert'] })
  user: UserEntity;
}
