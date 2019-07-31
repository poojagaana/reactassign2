import React, { Component } from 'react';
import axios from 'axios';

export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            name: '',
            begin_date:'',
            end_date:'',
            news_desk:''
        }
    }

    handleChange = event => {
        this.setState({
            name: event.target.byline,
            
begin_date:event.target.begin_date,
            end_date:event.target.end_date,
            new_desk:event.target.new_desk
        });
    }


    getPosts = () => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.byline},${this.state.begin_date},${this.end_date},${this.state.news_desk}&api-key=8ElS0akAhGS9prX1pHBUUdK4oRgraDfZ`)
            .then(response => {
                const data = JSON.parse(JSON.stringify(response.data.response.docs));
                
                console.log(data);
                this.setState({
                    posts: data.slice()
                });
            })
    }

    render() {
        let postList = this.state.posts.map(
            p => (
                <div key={p.abstract}>
                    Abstract: {p.abstract}<br />
                    News Desk: {p.news_desk}<br />
                    Section Name:{p.section_name}<br />
                    Type:{p.type_of_material}
                    <hr />
                </div>
            )

        );

        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <h4>Search</h4>
                        <div>
                        <input type="text" name="name" value={this.state.byline} onChange={this.handleChange}></input>
                        </div>
                        <h6>From</h6>
                        <input type="date" begin_date="begin_date" value={this.state.begin_date} onChange={this.handleChange}></input>
                        <h6>To</h6>
                        <input type="date" end_date="end_date" value={this.state.end_date} onChange={this.handleChange}></input>
                    </div>
                    <div className='col'>
                        <h4>Filter</h4>
                        <div className='row'>
                            <h6 className='col'>News Desk</h6>
                            <select>
                                <option>Arts</option>
                                <option>Business</option>
                                <option>Culture</option>
                                <option>Education</option>
                                <input type="option" news_desk="news_desk" value={this.state.news_desk} onChange={this.handleChange}></input>
                            </select>
                            <h6 className='col'> Section</h6>
                            <h6>Type</h6>
                        </div>

                    </div>

                </div>



                <div>
                    <button onClick={this.getPosts}>
                        Search
                        
                </button>
                {postList}
                
                   
                </div>
            </div>
        )
    }
}