export default {
  routes: [
    {
      method: 'GET',
      path: '/license-infos',
      handler: 'license-info.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/license-infos/:id',
      handler: 'license-info.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/license-infos',
      handler: 'license-info.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/license-infos/:id',
      handler: 'license-info.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/license-infos/:id',
      handler: 'license-info.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

