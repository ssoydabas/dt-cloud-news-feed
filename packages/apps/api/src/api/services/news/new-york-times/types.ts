export interface INewYorkTimesResponseResultPerson {
  firstname: string;
  lastname: string;
}

export interface INewYorkTimesResponseMultimedia {
  type: string;
  url: string;
}

export interface INewYorkTimesResponseResults {
  _id: string;
  web_url: string;
  snippet: string;
  headline: {
    main: string;
  };
  pub_date: Date;
  byline: {
    person?: INewYorkTimesResponseResultPerson[];
  };
  multimedia: INewYorkTimesResponseMultimedia[];
  section_name: string;
}

export interface INewYorkTimesResponse {
  status: string;
  copywrite: string;
  response: {
    docs: INewYorkTimesResponseResults[];
    meta: { hits: number; offset: number; time: number };
  };
}
