import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class SearchNav extends Component {
    constructor() {
        super();

        this.state.search=''
    }
    render() {
        return (
            <form>
                <FormControl
                    placeholder="Search for users"
                    type="text"
                    name="search"
                    onChange=
                    value={this.state.search}
                />
                <Button type="submit">Search</Button>
            </form>
        )
    }
}

export default SearchNav;