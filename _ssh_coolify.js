const { Client } = require('ssh2');

const conn = new Client();
const commands = [
  'echo "=== COOLIFY API TOKEN ==="',
  'docker exec coolify cat /var/www/html/.env 2>/dev/null | grep -E "^(APP_URL|APP_KEY)" | head -5',
  'echo ""',
  'echo "=== COOLIFY DB - API TOKENS ==="',
  'docker exec coolify-db psql -U coolify -d coolify -c "SELECT id, name, token_encrypted FROM personal_access_tokens LIMIT 5;" 2>/dev/null || echo "Sem tokens"',
  'echo ""',
  'echo "=== COOLIFY APP URL ==="',
  'docker exec coolify env 2>/dev/null | grep APP_URL',
  'echo ""',
  'echo "=== NGINX INTERCLUBES CONFIG ==="',
  'cat /etc/nginx/sites-enabled/interclubes 2>/dev/null',
  'echo ""',
  'echo "=== PM2 STATUS ==="',
  'source ~/.nvm/nvm.sh && pm2 status 2>/dev/null',
  'echo ""',
  'echo "=== DISK SPACE ==="',
  'df -h / && echo "" && du -sh /root/novointerclubessvps/.next 2>/dev/null',
].join(' && ');

conn.on('ready', () => {
  conn.exec(commands, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    stream.on('data', (data) => process.stdout.write(data));
    stream.stderr.on('data', (data) => process.stderr.write(data));
    stream.on('close', () => conn.end());
  });
}).on('error', (err) => {
  console.error('SSH Error:', err.message);
}).connect({
  host: '187.77.44.40',
  port: 22,
  username: 'root',
  password: 'Nova#vps2025',
});
