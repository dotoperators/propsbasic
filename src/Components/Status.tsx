export enum Statuses  {
    Loading= "Loading", 
    Completed= 'Completed'
}
interface IStatus {
    status: Statuses
}
export const Status: React.FC<IStatus> = (props: IStatus) => {
    let message = '';
    message = props.status === 'Loading' ? 'Loading' : 'Completed';
    return (<>
        <h1>{message}</h1>
    </>)
}