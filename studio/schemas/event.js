export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Event Title',
            type: 'string',
            description: '* Title of the event',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
            description: '* Date and time of the event',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'venue',
            title: 'Venue',
            type: 'string',
            description: '* Name of the venue',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'street',
            title: 'Street Address',
            type: 'string',
            description: '* Street address of the venue (Example: "123 Main St")',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            description: '* City of the venue',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'state',
            title: 'State or Province',
            type: 'string',
            description: 'State/Province of the venue',
        },
        {
            name: 'country',
            title: 'Country',
            type: 'string',
            description: 'Country of the venue',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the event',
        },
        {
            name: 'tickets',
            title: 'Tickets',
            type: 'url',
            description: 'Link to event tickets (Include https://)',
        },
    ]
}