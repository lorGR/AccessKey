import EventsButton from "../eventsButton/EventsButton";

const Events = () => {
  return (
    <div className="events">
        <div className="events__header">
            <h3>Events</h3>
            <div className="events__header__btns">
                <EventsButton btnName="All"/>
                <EventsButton btnName="Alerts"/>
            </div>
        </div>
    </div>
  );
}

export default Events