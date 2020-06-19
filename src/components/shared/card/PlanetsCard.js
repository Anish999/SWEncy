import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ReactCardFlip from 'react-card-flip';
import { MdMoreHoriz } from 'react-icons/md';
import Moment from 'moment';
import PlanetImage from '../../../assets/planets.jpg';

export default function PlanetsCard({ planets }) {
  const [displayFront, setDisplayFront] = React.useState(true);

  const handleCardFlip = () => {
    setDisplayFront(!displayFront);
  };

  const front = (
    <div>
      <Card>
        <Image src={PlanetImage} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {planets.name}
            <span
              style={{ float: 'right', cursor: 'pointer' }}
              onClick={handleCardFlip}
            >
              <MdMoreHoriz />
            </span>
          </Card.Header>
          <Card.Description>
            <strong>Climate</strong>
            <p>{planets.climate}</p>
            <strong>Created</strong>
            <p>{Moment(planets.created).format('YYYY-MM-DD')}</p>
            <strong>Population</strong>
            <p>{planets.population}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
  const back = (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>
            {planets.name}
            <span
              style={{ float: 'right', cursor: 'pointer' }}
              onClick={handleCardFlip}
            >
              <MdMoreHoriz />
            </span>
          </Card.Header>
          <Card.Description>
            <strong>Diameter</strong>
            <p>{planets.diameter}</p>
            <strong>Gravity</strong>
            <p>{planets.gravity}</p>
            <strong>Rotation period</strong>
            <p>{planets.rotation_period}</p>
            <strong>Orbital period</strong>
            <p>{planets.orbital_period}</p>
            <strong>Surface Water</strong>
            <p>{planets.surface_water}</p>
            <strong>Terrain</strong>
            <p>{planets.terrain}</p>
            <strong>Edited</strong>
            <p>{Moment(planets.edited).format('YYYY-MM-DD')}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
  return (
    <div>
      <ReactCardFlip
        isFlipped={!displayFront}
        infinite={true}
        flipSpeedFrontToBack={1}
        flipSpeedBackToFront={1}
        containerStyle={{
          maxWidth: '350px',
          marginRight: '0px',
          border: '0px',
        }}
      >
        <div>{front}</div>

        <div>{back}</div>
      </ReactCardFlip>
    </div>
  );
}
