import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e: any) => setTitle(e.target.value)
    const onContentChanged = (e: any) => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )

            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor="postTitle">Post Title</label>
                    </div>
                    <div className='col'>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChanged}
                        />
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor="postContent">Content:</label>
                    </div>
                    <div className='col'>
                        <textarea
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={onContentChanged}
                        />
                    </div>
                </div>
                <button type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}