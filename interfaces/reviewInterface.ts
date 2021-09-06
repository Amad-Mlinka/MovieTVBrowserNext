export interface Reviews {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    items?: (reviewInterface)[] | null;
    errorMessage: string;
  }
  export interface reviewInterface {
    username: string;
    userUrl: string;
    reviewLink: string;
    warningSpoilers: boolean;
    date: string;
    rate: string;
    helpful: string;
    title: string;
    content: string;
  }
  