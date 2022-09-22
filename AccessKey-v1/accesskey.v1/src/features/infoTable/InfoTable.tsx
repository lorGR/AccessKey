import React from 'react'
import { ReactComponent as FilterIcon} from "./Vectorfilter_svg.svg"
import { ReactComponent as Addicon} from "./.svg"
import { ReactComponent as FilterIcon} from "./Vectorfilter_svg.svg"


interface InfoTableProps {
    tableName: string,
    // tableContent: string
}

export const InfoTable: React.FC<InfoTableProps> = (props) => {
  return (
    <div>
        <div className='table__header'>
            <div className='table__header__left'>
                <h2>{props.tableName}</h2>
                <FilterIcon/>
                <div>This will be a search bar</div>
            </div>
            <div className='table__header__right'>

            </div>
        </div>
    </div>
  )
}
