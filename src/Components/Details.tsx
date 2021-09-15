import {FC} from "react";

interface IProps {
    planet: any
}

export const Details: FC<IProps> = ({planet}) => {
    return (
        <div>
            <div className="details-container">
                <div className="detail-item col-1">
                    <h6>Rotation Time</h6>
                    <h4>{planet.rotation}</h4>
                </div>

                <div className="detail-item col-2">
                    <h6>Revolution time</h6>
                    <h4>{planet.revolutionTime}</h4>
                </div>

                <div className="detail-item col-3">
                    <h6>Radius</h6>
                    <h4>{planet.radius}</h4>
                </div>

                <div className="detail-item col-4">
                    <h6>Average Temp</h6>
                    <h4>{planet.average}</h4>
                </div>
            </div>
        </div>
    )
}