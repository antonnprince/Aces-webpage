export default {
    name: 'achievements',
    type: 'document',
    title: 'Achievements',
    fields: [
        {
            name: 'name',
            type:"string",
            title:"name"
        },
      {
        name: 'description',
        type:"string",
        title:"description"
      },
      {
        name: 'image',
        type:"image",
        title:"image"
      }
    ]
  }