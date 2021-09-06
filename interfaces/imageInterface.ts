export interface Images {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    items?: (imageInterface)[] | null;
    errorMessage: string;
  }
  export interface imageInterface {
    title: string;
    image: string;
  }
  