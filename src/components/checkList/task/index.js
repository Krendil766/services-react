import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Task = ({ text, onPress }) => {
    const [done, setDone] = useState(false);
    // useEffect(() => {
    //     done?onPress(1):onPress(-1)
    // }, [done])
    const onChange = useCallback(
        (e) => {
            setDone(e.target.checked)
            onPress(e.target.checked)
        },
        [setDone, onPress],
    )
    return (
        <div>
            <form action="#">
                <input type="checkbox" name="done" checked={done} onChange={onChange} />
                <span style={{ textdecoration: done ? 'none' : 'line-through' }}>{text}</span>
            </form>
        </div>
    )
}

Task.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
}
export default Task;