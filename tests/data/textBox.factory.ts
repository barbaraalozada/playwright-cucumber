import textBoxData from './textBox.json';
import type { TextBoxData, TextBoxDataType } from './types/textBox.types';

class TextBoxFactory {
  private data: TextBoxData;

  constructor(type: TextBoxDataType) {
    const overrides = textBoxData.overrides[type as keyof typeof textBoxData.overrides];
    if (!overrides) {
      throw new Error(`TextBox data type not supported: ${type}`);
    }
    this.data = { ...textBoxData.base, ...overrides };
  }

  withName(name: string): this {
    this.data.name = name;
    return this;
  }

  withEmail(email: string): this {
    this.data.email = email;
    return this;
  }

  withCurrentAddress(address: string): this {
    this.data.currentAddress = address;
    return this;
  }

  withPermanentAddress(address: string): this {
    this.data.permanentAddress = address;
    return this;
  }

  withWhitespace(): this {
    this.data.name = `  ${this.data.name}  `;
    this.data.email = `  ${this.data.email}  `;
    return this;
  }

  withUpperCaseName(): this {
    this.data.name = this.data.name.toUpperCase();
    return this;
  }

  build(): TextBoxData {
    return this.data;
  }
}

export const getTextBoxData = (type: TextBoxDataType): TextBoxData => {
  return new TextBoxFactory(type).build();
};

export const buildTextBoxData = (type: TextBoxDataType): TextBoxFactory => {
  return new TextBoxFactory(type);
};

export const getAllTextBoxData = (): TextBoxData[] => {
  return Object.keys(textBoxData.overrides).map((type) =>
    getTextBoxData(type as TextBoxDataType)
  );
};

export const getInvalidTextBoxData = (): TextBoxData[] => {
  return Object.keys(textBoxData.overrides)
    .filter((key) => key !== 'validUser')
    .map((type) => getTextBoxData(type as TextBoxDataType));
};
