import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../async-functions/GetMattresses';
import CommentForm from './CommentForm';

const MattressesComments = ({params}) => {
    const comments = useSelector(state => state.mattressId.comments)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getComments(Number(params.id)))
    }, [])
    return (
        <div>
            <div className='detail_comments_title'>Комментарии</div>
            {comments.map(comment =>
                    <CommentForm
                        key={comment.id}
                        email={comment.email}
                        body={comment.body}
                    />
                )
            }
        </div>
    );
};

export default MattressesComments;