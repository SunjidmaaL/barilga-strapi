export default {
  routes: [
    {
      method: 'GET',
      path: '/laws',
      handler: 'law.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/laws/:id',
      handler: 'law.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/laws',
      handler: 'law.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/laws/:id',
      handler: 'law.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/laws/:id',
      handler: 'law.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

