import React from 'react';

const CommentForm = ({email, body}) => {
    return (
        <div className='detail_comments_container'>
            <div className='detail_comments_email'>
                {email}
            </div>
            <div className='detail_comments_body'>
                {body}
            </div>
        </div>
    );
};

export default CommentForm;