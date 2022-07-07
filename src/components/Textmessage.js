import React, { useEffect, useState } from 'react';
// <-----icons start---->
import { BsEmojiSmile } from "react-icons/bs";
import { TbTags } from "react-icons/tb";
import { BsFillMicFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
// <-----icons end---->
import { FormControl, Button } from "react-bootstrap";
import ChatDataService from '../ChatService';

function Textmessage(props) { 

    const messages = [{}]
    const [message, setmessage] = useState("")
    const [values, setvalues] = useState([])
    const [data, setdata] = useState('')
    const send = (e) => {
        e.preventDefault();
        messages.push({ message });
    }
    console.log(messages);
    const sendMsg = () => {
        ChatDataService.create(data)
            .then(() => {
                setmessage("")
                console.log("Created new item successfully!");
            })
            .then(() => setdata(data))
            .then((data) => JSON.stringify(data))  // to convert to json
    }
    useEffect(() => {
        ChatDataService.getAll().on("value", setStory)
    })
    const setStory = (items) => {
        let chat = [];
        items.forEach(item => {
            chat.push(item.val());
            setvalues(chat.reverse())
        })
    }

    return (
        <div>
            <div>
                <div className=' container-fluid gow namebar py-3 px-5 '  >
                    <span className=' text-capitalize'>{props.name}</span>
                </div>

                <div> <ul className='textdesign'>{values.map(elem => <li>{elem}</li>)} </ul> </div>

                {/* // <-----icons start----> */}
                <BsEmojiSmile className='emoji' />
                <TbTags className='emoji1' />
                <BsFillMicFill className='emoji2' />
                {/* // <-----icons end----> */}

                {/* <-------right side msg sent button----> */}
                <FormControl value={message} onChange={(e) => { setmessage(e.target.value); setdata(e.target.value); }} className='search2' placeholder='type a message'>
                </FormControl><Button
                    onClick={sendMsg}
                    className='sent'><FiSend /></Button>
                {/* <-------right side msg sent button----> */}
            </div>
        </div>
    )
}
export default Textmessage;