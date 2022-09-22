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
  return (
    <div className="event">
      {status === true &&
        <p>
          <DoorStatusTrueIcon />
          {worker}
          Unlocked the door 
          {door} 
          at {time}
        </p>
      }
      {status === false &&
        <p>
          <DoorStatusFalseIcon />
          {door}
          failed to open at {time}
        </p>
      }
    </div>
  )
}

export default Event