export interface TextBoxData {
  name: string;
  email: string;
  currentAddress: string;
  permanentAddress: string;
}

export type TextBoxDataType =
  | 'validUser'
  | 'longName'
  | 'invalidEmail'
  | 'emptyCurrentAddress'
  | 'specialCharactersInName';
