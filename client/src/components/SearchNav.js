import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class SearchNav extends Component {
    constructor(props) {
        super(props);

        this.state.search = {
            searching=[]
        }
    }

    componentDidMount() {
        this.setState({
            searching: this.props.searchUser
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            searching: nextProps.searchUser
        })
    }

    handleChange(e) {
        let searchList = [];
        if (e.target.value !== "") {
            
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const search = this.state.search
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