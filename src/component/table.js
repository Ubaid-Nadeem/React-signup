import React from 'react'
import './singup.css'
function Table(props) {

    let person = props.Usersdetails.map((item, index) =>

        <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Password}</td>
        </tr>

    );


    return <div>

        <div className='databox'>
            <table border='1'>

                <tbody>
                    <tr>
                        <th>{'Name'}</th>
                        <th>{'Email'}</th>
                        <th>{'Password'}</th>
                    </tr>

                    {person}

                </tbody>
            </table>


        </div>

    </div>

}

export default Table