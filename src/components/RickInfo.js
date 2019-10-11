import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Info from './Info';
import { fetchFacts } from '../actions';

const RickInfo = (props) => {
    useEffect(() => {
        props.fetchFacts();
      }, []);
    if (props.isFetching) {
        // usually a spinner (react-loader-spinner)
        return <h2>Loading Rick and Morty Facts...</h2>;
      }
    return (
        <div>
        {props.rickFacts && props.rickFacts.map(item => (
          <Info key={item.id} item={item} />
        ))}
      </div>
    )
}


const mapStateToProps = state => {
    return {
        rickFacts: state.rickFacts,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect( 
    mapStateToProps,  
    {fetchFacts})
    (RickInfo);