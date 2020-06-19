import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PaginationComponent from './shared/Pagination';
import CardComponent from './shared/card/PeopleCard';

export default function People(props) {
  const { data, updatePage } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    updatePage(page);
  }, [page]);

  return (
    <React.Fragment>
      <h1>People</h1>
      <Grid columns={3}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <CardComponent people={people} />
            </Grid.Column>
          );
        })}
      </Grid>
      <br />
      <br />
      <PaginationComponent
        totalPages={9}
        onChange={(data) => {
          console.log(data.activePage);
          setPage(data.activePage);
        }}
      />
    </React.Fragment>
  );
}
