import React, { Component } from 'react';
import { Grid, Pagination } from 'semantic-ui-react';

export default class PaginationExampleControlled extends Component {
  state = { activePage: 1 };

  handleInputChange = (e, { value }) => this.setState({ activePage: value });

  handlePaginationChange = (e, { activePage }) =>
    this.setState({ activePage }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });

  render() {
    const { activePage } = this.state;

    return (
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column>
          <Pagination
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={this.props.totalPages}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
