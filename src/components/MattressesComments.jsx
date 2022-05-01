import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../async-functions/GetMattresses';
import CommentForm from './CommentForm';
import Loader from './Loader';

const MattressesComments = ({params}) => {
    const comments = useSelector(state => state.mattressId.comments)
    const selectedMattress = useSelector(state => state.mattressId.selectedMattress)
    const loading = useSelector(state => state.mattressId.loading)
    const error = useSelector(state => state.mattressId.error)
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