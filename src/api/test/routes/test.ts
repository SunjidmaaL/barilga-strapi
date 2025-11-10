export default {
  routes: [
    {
      method: 'GET',
      path: '/tests',
      handler: 'test.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/tests/:id',
      handler: 'test.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/tests',
      handler: 'test.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/tests/:id',
      handler: 'test.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/tests/:id',
      handler: 'test.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
