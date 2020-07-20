import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfiel from '../assets/img/no-name.png'
import Road from '../assets/img/logo.jpg'

const Chat = (props) => {
    const isQestion = (props.type === 'question');
    const classes = isQestion ? 'p-chat__row' : 'p-chat__reverse';

    return(
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQestion ? (
                    <Avatar alt="icon" src={Road} />
                ):(
                    <Avatar alt="icon" src={NoProfiel} />
                )}
                
                </ListItemAvatar>
                <div className= "p-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat