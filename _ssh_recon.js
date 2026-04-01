const { Client } = require('ssh2');

const conn = new Client();
const commands = [
  'echo "=== SISTEMA ==="',
  'lsb_release -a 2>/dev/null || cat /etc/os-release',
  'echo "=== MEMORIA ==="',
  'free -h',
  'echo "=== DISCO ==="',
  'df -h /',
  'echo "=== PORTAS EM USO ==="',
  'ss -tlnp 2>/dev/null | head -25',
  'echo "=== DOCKER ==="',
  'docker ps 2>/dev/null || echo "Docker nao instalado"',
  'echo "=== NODE ==="',
  'node -v 2>/dev/null || echo "Node nao instalado"',
  'echo "=== NGINX ==="',
  'nginx -v 2>&1 || echo "Nginx nao instalado"',
  'echo "=== PM2 ==="',
  'pm2 list 2>/dev/null || echo "PM2 nao instalado"',
  'echo "=== HOME ==="',
  'ls -la ~',
  'echo "=== PROJETOS ==="',
  'ls -la /var/www 2>/dev/null || echo "Sem /var/www"',
  'echo "=== SUPABASE ==="',
  'supabase --version 2>/dev/null || echo "Supabase CLI nao instalado"',
].join(' && ');

conn.on('ready', () => {
  conn.exec(commands, (err, stream) => {
    if (err) { console.error(err); conn.end(); return; }
    let output = '';
    stream.on('data', (data) => { output += data.toString(); process.stdout.write(data); });
    stream.stderr.on('data', (data) => { process.stderr.write(data); });
    stream.on('close', () => { conn.end(); });
  });
}).on('error', (err) => {
  console.error('SSH Error:', err.message);
}).connect({
  host: '187.77.44.40',
  port: 22,
  username: 'root',
  password: 'Nova#vps2025',
});
