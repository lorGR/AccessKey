interface CompanyMenuCardProps {
    name: string
    number: number
}

const CompanyMenuCard: React.FC<CompanyMenuCardProps> = ({name, number}) => {
  return (
    <div className="company-menu-card">
        <div className="company-menu-card__name">
            <p>{name}</p>
        </div>
        <div className="company-menu-card__number">
            <p>{number}</p>
        </div>
    </div>
  )
}

export default CompanyMenuCard