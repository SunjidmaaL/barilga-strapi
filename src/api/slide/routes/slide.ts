export default {
  routes: [
    {
      method: 'GET',
      path: '/slides',
      handler: 'slide.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/slides/:id',
      handler: 'slide.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/slides',
      handler: 'slide.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/slides/:id',
      handler: 'slide.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/slides/:id',
      handler: 'slide.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

