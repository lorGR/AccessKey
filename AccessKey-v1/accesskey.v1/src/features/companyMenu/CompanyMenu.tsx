import CompanyMenuCard from "../companyMenuCard/CompanyMenuCard"

interface CompanyMenuProps {
    locations: number,
    doors: number,
    workers: number
}

const CompanyMenu: React.FC<CompanyMenuProps> = ({ locations, doors, workers}) => {
  return (
    <div className="company-menu">
        <CompanyMenuCard name="Locations" number={locations} />
        <CompanyMenuCard name="Doors" number={doors} />
        <CompanyMenuCard name="Locations" number={workers} />
    </div>
  )
}

export default CompanyMenu