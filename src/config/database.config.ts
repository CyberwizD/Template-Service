import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  url:
    process.env.DATABASE_URL ||
    'postgresql://postgres:uFuVoAlFdJoQNxoDASotKxGixsImPuHO@shinkansen.proxy.rlwy.net:11814/railway',
}));
