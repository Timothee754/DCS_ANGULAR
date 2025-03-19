export interface ClientData {
  NomClient: string;
  total_prix: string;
  month: string;
}

export interface Clients {
  [key: string]: ClientData;
}
