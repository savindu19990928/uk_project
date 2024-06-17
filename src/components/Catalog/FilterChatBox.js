import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatBox = ({ options, onClick }) => {
    return (
        <div className="chat-box">
            <div className="chat-box-body">
                {options.map((option, index) => (
                    <div onClick={onClick} key={index} className="chat-box-option textcr">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatBox;
