import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css'; // Import the CSS file

function DateTimeDisplay() {
    const [dateTime, setDateTime] = useState(new Date());

    // Use useEffect to update the date and time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000); // Update every 1000ms (1 second)

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Function to format the date as "29th April 2024"
    const formatDate = (date) => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC'
        };

        const formattedDate = date.toLocaleDateString('en-GB', options);
        const day = formattedDate.split(' ')[0];

        // Add the ordinal suffix to the day
        const suffix = (day) => {
            const lastDigit = day.slice(-1);
            if (day.endsWith('11') || day.endsWith('12') || day.endsWith('13')) {
                return 'th';
            }
            switch (lastDigit) {
                case '1':
                    return 'st';
                case '2':
                    return 'nd';
                case '3':
                    return 'rd';
                default:
                    return 'th';
            }
        };

        const ordinalSuffix = suffix(day);

        // Return the date in the desired format
        return `${day}${ordinalSuffix} ${formattedDate.split(' ')[1]} ${formattedDate.split(' ')[2]}`;
    };

    // Function to format the time as "08:48 am"
    const formatTime = (date) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true, // Use 12-hour format
            timeZone: 'Asia/Kolkata'
        };
        return date.toLocaleTimeString('en-GB', options);
    };

    return (
        <div className="datetime-container">
            {/* Display the formatted date and time */}
            <p className="datetime-text">
                Date: {formatDate(dateTime)}, Time: {formatTime(dateTime)}
            </p>
        </div>
    );
}

export default DateTimeDisplay;
