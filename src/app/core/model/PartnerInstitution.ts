import {CandidacyUniversity} from "./candidacy-university";

export class  PartnerInstitution{
  idPartner: number;
  name: string;
  country: string;
  geographicalArea!: string;
  language: string;
  email: string;
  picture: string;
  fees: number;
  capacityReception: number;
  active: boolean;
  special!: string;
  image:string;
  description:string;
  candidacies:CandidacyUniversity[]

}
