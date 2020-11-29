import {PoliciesType} from '../Types';

export interface CancellationPolicyInterface {
  deadline: string;
  has_deadline: boolean;
  policies: PoliciesType[];
  alerts: string[];
  restrictions: string[];
}
