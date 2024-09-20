import React from 'react'
import { IPerson } from '../Models/IPerson'

interface PersonProps {
    person: IPerson
}

const Person: React.FC<PersonProps> = (props: PersonProps) => {
    return (
        <>
            <h1>
                {props.person.name}
            </h1>
            <div>
                <h1>
                    Address
                </h1>
                <div>
                    {
                        props.person.address.map((res) => {
                            return (
                                <span>
                                    {res.plotNo} | {res.landMark}
                                    <br/>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}



export default Person
