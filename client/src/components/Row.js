import React from "react";

const renderEmployees = (items) => {
    return items.map(item => 
        <tr key={item.id}>
            <td>
                {item.firstName}
            </td>
            <td>
                {item.lastName}
            </td>
            <td>
                {item.role}
            </td>
            <td>
                {item.department}
            </td>
        </tr>
    );
}

function Row(props) {

    return renderEmployees(props.employees);
}

export default Row;