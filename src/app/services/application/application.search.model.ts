export interface ApplicationSearchRequest {
  startDate: Date;
  endDate: Date;
  isMaxApps: false;
  isAutoLoad: false;
  sponsorNumber: number;
  visaType: number[];
  applicationStatus: number[];
  applicationPriority: number[];
  nationalityFrom: number[];
  nationalityTo: number[];
}
