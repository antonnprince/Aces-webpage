export default {
    name: 'events',
    type: 'document',
    title: 'Events',
    fields: [
      {
        name: 'name',
        type:"string",
        title:"Event Name"
      },
      {
        name: 'date',
        type:"string",
        title:"Date"
      },
      {
        name: 'venue',
        type:"string",
        title:"Venue"
      },
      {
        name: 'image',
        type:"image",
        title:"Poster"
      },
      {
        name: 'register',
        type:"string",
        title:"Link"
      }
    ]
  }