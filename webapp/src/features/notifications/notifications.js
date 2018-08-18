import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Notify from './notify.js';
import { removeNotify } from "./notificationsActions.js"

const Notifications = ({ actions, notifies }) => {
    const { removeNotify } = actions;

    return <ul className="notifies">{
        notifies.map(notify => {
            const { id } = notify;
            return <Notify {...notify} key={id} onDismissClick={() => removeNotify(id)} />
        })
    }
    </ul>
}

const mapStateToProps = (state) => {
    return {
        notifies: state.notificationsState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ removeNotify }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);