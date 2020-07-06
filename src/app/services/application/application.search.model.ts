export interface ApplicationSearchRequest {
  startDate: Date;
  endDate: Date;
  isMaxApps: false;
  isAutoLoad: false;
  sponsorNumber: number;
  visaType: string[];
  applicationStatus: number[];
  applicationPriority: number[];
  nationalityFrom: string[];
  nationalityTo: string[];
}
