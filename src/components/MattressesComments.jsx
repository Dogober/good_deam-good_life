import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../async-functions/GetMattresses';
import CommentForm from './CommentForm';
import Loader from './Loader';

const MattressesComments = ({params}) => {
    const {comments, selectedMattress, loading, error} = useSelector(state => state.mattressDetails)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments(Number(params.id)))
    }, [])

    const renderingCommentsByCondition = () => {
        if (error) {
            return <CommentForm email={error} body={error}/>
        } else if (!error && !selectedMattress) {
            return <CommentForm email="" body=""/>
        } else {
            return comments.map(comment => 
                <CommentForm
                    key={comment.id}
                    email={comment.email}
                    body={comment.body}
                />
            )
        }
    }

    return (
        <div>
            {loading === true
            ?<Loader/>
            :<>
                <div className='detail_comments_title'>Комментарии</div>
                {renderingCommentsByCondition()}
            </>
            }
        </div>
    );
};

export default MattressesComments;