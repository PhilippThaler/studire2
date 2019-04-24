export interface IStudent {
  id?: number;
  matrikelNr?: number;
  firstName?: string;
  lastName?: string;
  street?: string;
  zipCode?: number;
  city?: string;
}

export const defaultValue: Readonly<IStudent> = {};
