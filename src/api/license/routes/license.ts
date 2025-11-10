export default {
  routes: [
    {
      method: 'GET',
      path: '/licenses',
      handler: 'license.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/licenses/:id',
      handler: 'license.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/licenses',
      handler: 'license.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/licenses/:id',
      handler: 'license.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/licenses/:id',
      handler: 'license.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

