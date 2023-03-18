import { UserTracking } from "./userTracking.model";

export interface User {
  id: number;
  firstName?: string;
  lastName?: string;
  gender?: string;
  location?: UserTracking;
}
