import { SexEnum } from 'src/common/enum/event.users.enum';

export class UserModel {
  id: number;
  fullName: string;
  age: number;
  gender: SexEnum;
  email: string;
  password: string;
}
