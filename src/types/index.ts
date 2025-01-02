export interface Service {
  id: string;
  title: string;
  description: string;
  price: {
    starting: number;
    enterprise: number;
  };
  icon: string;
}