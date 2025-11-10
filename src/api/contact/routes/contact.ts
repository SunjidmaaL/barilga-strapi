export default {
  routes: [
    {
      method: 'GET',
      path: '/contacts',
      handler: 'contact.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/contacts/:id',
      handler: 'contact.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/contacts',
      handler: 'contact.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/contacts/:id',
      handler: 'contact.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/contacts/:id',
      handler: 'contact.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

