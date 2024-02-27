interface Section {
    title: string;
    body: string;
  }
  
  export interface Content {
    [key: string]: Section;
  }
  