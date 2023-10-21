import React, { useEffect, useState } from 'react';
import client from '../config/sanity';
import { formatDate, formatTime } from '../utils/time.utils';

const Event = () => {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        client
        .fetch('*[_type == "event"]')
        .then((data) => setEventData(data))
        .catch((error) => console.error('Error fetching event data', error));
    }, []);

    return (
        <div>
        {eventData.map((event) => (
            <div key={event._id} className="event">
                <h3>{event.title}</h3>
                <p>{formatDate(event.date)} at {formatTime(event.date)}</p>
                <p>{event.venue}</p>
                <p>{event.street}, {event.city}{event.state ? `, ${event.state}` : ''}<b>{event.country ? ` ${event.country}` : ''}</b></p>
                
                {event.description && <p>{event.description}</p>}
                {event.tickets && (
                    <a href={event.tickets} target="_blank" rel="noopener noreferrer">
                        Tickets
                    </a>
                )}
            </div>
        ))}
        </div>
    );
};

export default Event;
