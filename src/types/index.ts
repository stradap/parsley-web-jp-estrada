export interface IApplicationProps {}

export interface ISurveyProps {
  css: any;
  json: any;
  data: any;
  onComplete: (survey: any) => void;
}

export interface IDefaultValues {
  conditionOther?: string[];
  conditionsCardiovascular?: string[];
  conditionsGrastrointestinal?: string[];
  conditionsPhychological?: string[];
  drinkAlcohol?: boolean;
  email?: string;
  gender?: string[];
  illicitDrugs?: boolean;
  maritalStatus?: string;
  patienFirstName?: string;
  patientLastName?: string;
  phoneNumber?: string;
  smokeTobacco?: false;
  state?: string;
  street?: string;
  zip?: string;
}
