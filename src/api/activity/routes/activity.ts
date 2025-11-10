export default {
  routes: [
    {
      method: 'GET',
      path: '/activities',
      handler: 'activity.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/activities/:id',
      handler: 'activity.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/activities',
      handler: 'activity.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/activities/:id',
      handler: 'activity.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/activities/:id',
      handler: 'activity.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

