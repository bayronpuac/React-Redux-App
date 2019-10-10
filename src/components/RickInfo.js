import React from 'react';
import { connect } from 'react-redux';

const RickFacts = (props) => {
    return (
        <div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        rickFacts: state.rickFacts
    }
}

export default connect(mapStateToProps, {})(RickFacts);