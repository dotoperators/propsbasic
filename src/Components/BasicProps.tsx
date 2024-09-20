interface IBasicProps {
    name: string,
    age: number,
    isLogedin: boolean
}
const BasicProps: React.FC<IBasicProps> = (props: IBasicProps) => {
    return (
        <>
            {props.isLogedin ?
                <div>
                    <h1>
                        Basic Props
                    </h1>
                    <span>
                        Name : {props.name}
                    </span>
                    <span>
                        Age : {props.age}
                    </span>
                </div> : <h1>Welcome Guest</h1>
            }
        </>
    )
}

export default BasicProps;