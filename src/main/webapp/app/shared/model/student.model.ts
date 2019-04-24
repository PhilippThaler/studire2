export interface IStudent {
  id?: number;
  firstName?: string;
  lastName?: string;
  street?: string;
  zipCode?: number;
  city?: string;
  matrikelNr?: number;
}

export const defaultValue: Readonly<IStudent> = {};
