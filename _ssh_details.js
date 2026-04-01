const { Client } = require('ssh2');

const conn = new Client();
const commands = [
  // Coolify traefik labels and domains
  'echo "=== TRAEFIK ROUTES ==="',
  'docker inspect coolify-proxy --format "{{json .Config.Labels}}" 2>/dev/null | head -5',
  'echo ""',
  'echo "=== COOLIFY ENV (domains) ==="',
  'docker exec coolify env 2>/dev/null | grep -i "APP_URL\\|DOMAIN" || echo "nenhum"',
  'echo ""',
  'echo "=== SUPABASE KONG ENV ==="',
  'docker inspect supabase-kong-z8okk8040wgsow80wcoc44sg --format "{{json .Config.Env}}" 2>/dev/null | tr "," "\\n" | grep -i "SUPABASE\\|ANON\\|SERVICE\\|URL\\|API" | head -20',
  'echo ""',
  'echo "=== SUPABASE STUDIO URL ==="',
  'docker inspect supabase-studio-z8okk8040wgsow80wcoc44sg --format "{{json .Config.Labels}}" 2>/dev/null | tr "," "\\n" | grep -i "traefik\\|Host" | head -10',
  'echo ""',
  'echo "=== COOLIFY LABELS ==="',
  'docker inspect coolify --format "{{json .Config.Labels}}" 2>/dev/null | tr "," "\\n" | grep -i "traefik\\|Host" | head -10',
  'echo ""',
  'echo "=== NVM / NODE ==="',
  'source ~/.nvm/nvm.sh 2>/dev/null && nvm list 2>/dev/null',
  'echo ""',
  'echo "=== EXISTING PROJECT ==="',
  'ls -la /root/novointerclubessvps/ 2>/dev/null | head -15',
  'cat /root/novointerclubessvps/package.json 2>/dev/null | head -10',
  'echo ""',
  'echo "=== NGINX SITES ==="',
  'ls /etc/nginx/sites-enabled/ 2>/dev/null',
  'cat /etc/nginx/sites-enabled/* 2>/dev/null | head -40',
  'echo ""',
  'echo "=== PORTAS LIVRES PARA LDQ ==="',
  'echo "Port 3001: " && ss -tlnp | grep ":3001 " || echo "LIVRE"',
  'echo "Port 3002: " && ss -tlnp | grep ":3002 " || echo "LIVRE"',
  'echo "Port 4000: " && ss -tlnp | grep ":4000 " || echo "LIVRE"',
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
