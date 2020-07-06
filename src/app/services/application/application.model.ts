// export type Applications = Application[];

export interface Application {
  id: number;
  applicantName: string;
  gender: string;
  dateOfBirth: Date;
  passportNumber: string;
  nationalityId: number;
  nationality: string;
  profession: string;
  visaTypeId: number;
  visaType: string;
  profileMatching: string;
  feeStatus: boolean;
  documentStatus: boolean;
  ibvStatus: ProcessingStatus;
  preChecksStatus: ProcessingStatus;
  validationStatus: ProcessingStatus;
  finalStatus: number;
  finalStatusName: string;
  imageUrl: string;
  sponsorNumber: number;
  applicationPriority: number;
}

export enum ProcessingStatus {
  Warn = 1,
  Valid,
  Error
}
