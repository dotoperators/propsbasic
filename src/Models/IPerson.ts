export interface IPerson{
    name:string,
    address: IAddress[]
}

interface IAddress{
    plotNo:string,
    landMark:string
}