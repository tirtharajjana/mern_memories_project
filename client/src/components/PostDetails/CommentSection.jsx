import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import {commentPost} from '../../actions/posts'

const CommentSection = ({ post }) => {
    const classes = useStyles();
    console.log(post);
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("profile"));

    const [comments, setComments] = useState([1, 2, 3, 4, 5]);
    const [comment, setComment] = useState('');

    const handleClick = () => {
        const finalComment = `${user.result}: ${comment}`
        dispatch(commentPost(finalComment, post._id));
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom varient="h6" >Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography key={i} gutterBottom variant="subtitle1" >
                            Comment {i}
                        </Typography>
                    ))}
                </div>
                <div style={{ width: '70%' }} className="">
                    <Typography gutterBottom varient="h6" >Write a comment</Typography>
                    <TextField
                        fullWidth
                        rows={4}
                        variant="outlined"
                        label="Comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick} >
                        comment
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CommentSection
