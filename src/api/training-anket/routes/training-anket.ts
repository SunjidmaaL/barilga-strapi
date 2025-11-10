export default {
  routes: [
    {
      method: 'GET',
      path: '/training-ankets',
      handler: 'training-anket.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/training-ankets/:id',
      handler: 'training-anket.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/training-ankets',
      handler: 'training-anket.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/training-ankets/:id',
      handler: 'training-anket.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/training-ankets/:id',
      handler: 'training-anket.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

