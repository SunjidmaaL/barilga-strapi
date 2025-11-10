export default {
  routes: [
    {
      method: 'GET',
      path: '/news2',
      handler: 'news1.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/news2/:id',
      handler: 'news1.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/news2',
      handler: 'news1.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/news2/:id',
      handler: 'news1.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/news2/:id',
      handler: 'news1.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

