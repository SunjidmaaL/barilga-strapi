export default {
  routes: [
    {
      method: 'GET',
      path: '/foreign-relations',
      handler: 'foreign-relation.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/foreign-relations/:id',
      handler: 'foreign-relation.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/foreign-relations',
      handler: 'foreign-relation.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/foreign-relations/:id',
      handler: 'foreign-relation.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/foreign-relations/:id',
      handler: 'foreign-relation.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

