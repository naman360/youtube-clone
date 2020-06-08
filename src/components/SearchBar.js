import React, { Component } from 'react'
import {Paper, TextField} from '@material-ui/core'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchItem:''
        }
    }
    handleChange = event => this.setState({searchItem: event.target.value})
    handleSubmit = event => {
        const {searchItem} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchItem);
        event.preventDefault();
    }

    
    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar
