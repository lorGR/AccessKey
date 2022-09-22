import { ReactComponent as DoorStatusTrueIcon } from "./assets/svgs/doorStatusTrueIcon.svg";
import { ReactComponent as DoorStatusFalseIcon } from "./assets/svgs/doorStatusFalseIcon.svg";

interface EventProps {
  status: boolean,
  worker: string,
  event: boolean,
  door: string,
  time: string
}

const Event: React.FC<EventProps> = ({ status, worker, event, door, time }) => {
  let msg = "";
  if (event === true) {
    msg = "Unlocked the door";
  } else {
    msg = "failed to open at";
  }
  return (
    <div className="event">
      {status === true &&
        <div className="event__information">
          <DoorStatusTrueIcon />
          <p>
            <span className="event__information__worker">{worker} </span>
            {msg}
            <span className="event__information__door"> {door} </span>
            at {' '}
            {time}
          </p>
        </div>
      }
      {status === false &&
        <div className="event__information">
          <DoorStatusFalseIcon />
          <p>
            {door} {' '}
            {msg} {' '}
            {time}
          </p>
        </div>
      }
    </div>
  )
}

export default Event