import React from 'react';

import './Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content_wrapper'>
             <form>
             <label htmlFor="">Search</label><p></p>
                    <input type="text" name="id" placeholder="Enter search items.."/>
             </form>
            </div>
        );
    }
}

export default Content;