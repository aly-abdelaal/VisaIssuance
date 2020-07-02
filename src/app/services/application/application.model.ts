// export type Applications = Application[];

export interface Application {
  id: number;
  applicantName: string;
  passportNumber: string;
  nationalityId: number;
}

export interface Application2 {
  appId: number;
  appDate: Date;
  appNo: number;
  nationalityId: number;
}
