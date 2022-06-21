export interface UserInfo {
  id: string;
  name: string;
  lastName: string;
  secondLastName: string;
  email: string;
  passwordConfirmed: string;
  roleId: number | null;
}

interface DataInfo {
  user: UserInfo;
  token: string;
}

export interface ResponseInfo {
  data: DataInfo;
  message: string;
}
