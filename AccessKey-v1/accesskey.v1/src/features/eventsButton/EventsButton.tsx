interface EventsButtonProps {
    btnName: string
}

const EventsButton: React.FC<EventsButtonProps> = ({ btnName }) => {
    return (
        <button className="events-button">{btnName}</button>
    )
}

export default EventsButton