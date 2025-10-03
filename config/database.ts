export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.tgyssxlfpmjjibaknxon.supabase.co'),   // эсвэл Supabase DB host
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Barilga-2$25-Supabase'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
