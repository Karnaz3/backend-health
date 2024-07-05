import { PartsEnum } from 'src/common/enum/parts.enum';
import { DoctorModel } from './doctor.model';
import { UserModel } from './user.model';
import { AppointmentStatusEnum } from 'src/common/enum/report.status.enum';

export class AppointmentModel {
  id: number;
  part: PartsEnum;
  description: string;
  date: Date;
  status: AppointmentStatusEnum;
  user: UserModel;
  doctor: DoctorModel;
}
