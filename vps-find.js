const { Client } = require('ssh2');
const c = new Client();
c.on('ready', () => {
  console.log('Connected');
  c.exec('find /data/coolify -name "docker-compose.yml" -path "*r80oo8wwo4wgkk8sos40w44w*" 2>/dev/null; echo "---"; find /data/coolify -name "docker-compose.yml" 2>/dev/null | head -20', (err, stream) => {
    if (err) { console.error(err); c.end(); return; }
    stream.on('data', d => process.stdout.write(d));
    stream.stderr.on('data', d => process.stderr.write(d));
    stream.on('close', () => c.end());
  });
}).connect({ host: '187.77.44.40', port: 22, username: 'root', password: 'Nova#vps2025' });
