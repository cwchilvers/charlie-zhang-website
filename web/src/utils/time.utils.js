const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return new Date(date).toLocaleDateString('en-US', options);
};

const formatTime = (date) => {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    return new Date(date).toLocaleTimeString('en-US', options);
};

export { formatDate, formatTime}