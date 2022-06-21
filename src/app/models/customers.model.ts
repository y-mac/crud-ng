export interface Customer {
  email: string;
  id: string;
  lastName: string;
  name: string;
  passwordConfirmed: boolean;
  roleId: number | null;
  secondLastName: string;
}

export interface CustomersInfo {
  data: Customer[];
  message: string;
}
