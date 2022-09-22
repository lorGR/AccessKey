import EventsButton from "../eventsButton/EventsButton";

import Event from "../event/Event";

const companyEvents = [
    {
        status: true,
        worker: "Solomon Clay",
        event: true,
        door: "2H",
        time: "11:25"
    },
    {
        status: false,
        worker: "worker",
        event: false,
        door: "22C",
        time: "11:25"
    },
    {
        status: true,
        worker: "Asha Olson",
        event: true,
        door: "2F",
        time: "11:13"
    },
    {
        status: true,
        worker: "Lewys Gill",
        event: true,
        door: "2F",
        time: "11:02"
    },
    {
        status: true,
        worker: "Oskar Cross",
        event: true,
        door: "20P",
        time: "10:46"
    },
    {
        status: true,
        worker: "Gili Menahem",
        event: true,
        door: "27A",
        time: "10:37"
    },
    {
        status: true,
        worker: "Lior Grishin",
        event: true,
        door: "1D",
        time: "10:21"
    }
]

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
        <div className="events__events">
            { companyEvents.map(event => {
                return (
                    <Event 
                    status={event.status}
                    worker={event.worker}
                    event={event.event}
                    door={event.door}
                    time={event.time} />
                )
            })}
        </div>
    </div>
  );
}

export default Events