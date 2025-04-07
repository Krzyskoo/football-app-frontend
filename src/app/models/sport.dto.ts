export interface SportDTO {
    key: string;
    active: boolean;
    group: string;
    description: string;
    title: string;
    has_outrights: boolean; // uwzględnia @JsonProperty z backendu
  }