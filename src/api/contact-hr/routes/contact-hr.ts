export default {
  routes: [
    {
      method: 'GET',
      path: '/contact-hrs',
      handler: 'contact-hr.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/contact-hrs/:id',
      handler: 'contact-hr.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/contact-hrs',
      handler: 'contact-hr.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/contact-hrs/:id',
      handler: 'contact-hr.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/contact-hrs/:id',
      handler: 'contact-hr.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

