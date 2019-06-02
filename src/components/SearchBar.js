import React, {Component} from 'react';

class SearchBar extends Component {

    state = { term: "" }

    onFormSubmit=(e)=>{
        e.preventDefault();
        //parent component is told what the search term is
        this.props.onSubmitParent(this.state.term);
    };

    render() { 
        //data inside the component: controlled input thanks to this.setState({ter:})
        return ( 
        <div className="search-bar ui segement">
           <form onSubmit={this.onFormSubmit} className="ui form">
                <label>Video Search</label>
                <div className="field">
                
                    <input type="text" value= {this.state.term} onChange={(e=>this.setState({term: e.target.value}))}>

                    </input>
                </div>

           </form>
           
        </div>);
    }
}
 
export default SearchBar;