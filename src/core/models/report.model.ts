import { ReportSeverityEnum } from 'src/common/enum/report-sevearity.enum';
import { UserModel } from './user.model';

export class ReportModel {
  id: number;
  title: string;
  description: string;
  severity: ReportSeverityEnum;
  user: UserModel;
}
