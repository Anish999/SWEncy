import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Moment from 'moment';
import ReactCardFlip from 'react-card-flip';
import { MdMoreHoriz } from 'react-icons/md';
import PeopleImage from '../../../assets/yoda.jpg';
export default function CardComponent({ people }) {
  const [displayFront, setDisplayFront] = React.useState(true);

  const handleCardFlip = () => {
    setDisplayFront(!displayFront);
  };

  const front = (
    <Card>
      <Image src={PeopleImage} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {people.name}
          <span
            style={{ float: 'right', cursor: 'pointer' }}
            onClick={handleCardFlip}
          >
            <MdMoreHoriz />
          </span>
        </Card.Header>
        <Card.Description>
          <strong>Height</strong>
          <p>{people.height}</p>
          <strong>Mass</strong>
          <p>{people.mass}</p>
          <strong>Created</strong>
          <p>{Moment(people.created).format('YYYY-MM-DD')}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
  const back = (
    <Card>
      <Card.Content>
        <Card.Header>
          {people.name}
          <span
            style={{ float: 'right', cursor: 'pointer' }}
            onClick={handleCardFlip}
          >
            <MdMoreHoriz />
          </span>
        </Card.Header>
        <br />
        <Card.Description>
          <strong>Height</strong>
          <p>{people.height}</p>
          <strong>Mass</strong>
          <p>{people.mass}</p>
          <strong>Gender</strong>
          <p>{people.gender}</p>
          <strong>Hair Color</strong>
          <p>{people.hair_color}</p>
          <strong>Skin Color</strong>
          <p>{people.skin_color}</p>
          <strong>Eye Color</strong>
          <p>{people.eye_color}</p>
          <strong>Hair Color</strong>
          <p>{people.hair_color}</p>
          <strong>Edited</strong>
          <p>{Moment(people.edited).format('YYYY-MM-DD')}</p>
          <strong>Birth Year</strong>
          <p>{people.birth_year}</p>
        </Card.Description>
      </Card.Content>
    </Card>
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
