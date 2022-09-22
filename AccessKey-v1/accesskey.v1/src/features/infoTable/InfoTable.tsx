import React from 'react'
import { ReactComponent as FilterIcon } from "./assets/Vectorfilter_svg.svg"
import { ReactComponent as AddIcon } from "./assets/add_squre_svg.svg"
import { ReactComponent as DeleteIcon } from "./assets/delete_squre_svg.svg"
import { ReactComponent as RightArrowIcon } from "./assets/right_arrow_svg.svg"

const locationArrayExample = [
    {
        locationName: "migdal Hashalom",
        city: "Tel Aviv",
        address: "ahad haam 9",
        doors: 10
    },
    {
        locationName: "Hagag co-working",
        city: "Tel Aviv",
        address: "harbaa 40",
        doors: 4
    },
    {
        locationName: "mindspace",
        city: "Tel Aviv",
        address: "vizman 14",
        doors: 12
    }
]
interface InfoTableProps {
    tableName: string,
    tablecolumn1: string,
    tablecolumn2: string,
    tablecolumn3: string,
    // tableContent: string
}

export const InfoTable: React.FC<InfoTableProps> = (props) => {
    return (
        <div className='table'>
            <div className='table__header'>
                <div className='table__header__left'>
                    <h2>{props.tableName}</h2>
                    <FilterIcon />
                    <div>This will be a search bar</div>
                </div>
                <div className='table__header__right'>
                    <AddIcon />
                    <DeleteIcon />
                </div>
            </div>
            <div className='table__table'>
                <table>
                    <tr>
                        <th></th>
                        <th>{props.tableName}</th>
                        <th>{props.tablecolumn1}</th>
                        <th>{props.tablecolumn2}</th>
                        <th>{props.tablecolumn3}</th>
                        <th></th>
                    </tr>
                </table>
                {locationArrayExample.map((location) => {
                    return (
                        <tr>
                            <input type="checkbox" />
                            <td>{location.locationName}</td>
                            <td>{location.city}</td>
                            <td>{location.address}</td>
                            <td>{location.doors}</td>
                            <td>{<RightArrowIcon />}</td>
                        </tr>
                    )
                })}

            </div>
        </div>
    )
}
