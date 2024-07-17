export interface IExampleObject {
    id: number;
    name: string;
    description: string; 
}
export type FormExampleObject = Omit<IExampleObject, 'id'>;