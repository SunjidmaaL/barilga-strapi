export default {
  routes: [
    {
      method: 'GET',
      path: '/expert-teams',
      handler: 'expert-team.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/expert-teams/:id',
      handler: 'expert-team.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/expert-teams',
      handler: 'expert-team.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/expert-teams/:id',
      handler: 'expert-team.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/expert-teams/:id',
      handler: 'expert-team.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

