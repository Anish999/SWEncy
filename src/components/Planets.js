import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import PaginationComponent from './shared/Pagination';
import CardComponent from './shared/card/PlanetsCard';

export default function Planets(props) {
  const { data, updatePage } = props;

  const [page, setPage] = useState(1);

  useEffect(() => {
    updatePage(page);
  }, [page]);
  return (
    <React.Fragment>
      <h1>Planets</h1>
      <Grid columns={3}>
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <CardComponent planets={planets} />
            </Grid.Column>
          );
        })}
      </Grid>
      <br />
      <br />
      <PaginationComponent
        totalPages={6}
        onChange={(data) => {
          console.log(data.activePage);
          setPage(data.activePage);
        }}
      />
    </React.Fragment>
  );
}
