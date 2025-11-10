export default {
  routes: [
    {
      method: 'GET',
      path: '/license-tables',
      handler: 'license-table.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/license-tables/:id',
      handler: 'license-table.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/license-tables',
      handler: 'license-table.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/license-tables/:id',
      handler: 'license-table.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/license-tables/:id',
      handler: 'license-table.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

