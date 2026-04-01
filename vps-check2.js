const { Client } = require('ssh2');
const c = new Client();
c.on('ready', () => {
  console.log('Connected to VPS');
  c.exec('which node; node -v; ls /var/www/liga-de-quebrada/ 2>/dev/null || echo "DIR NOT FOUND"; pm2 status 2>/dev/null || echo "PM2 NOT FOUND"; docker ps --format "{{.Names}} {{.Status}}" 2>/dev/null | head -20', (err, stream) => {
    if (err) { console.error(err); c.end(); return; }
    stream.on('data', d => process.stdout.write(d));
    stream.stderr.on('data', d => process.stderr.write(d));
    stream.on('close', () => c.end());
  });
}).connect({ host: '187.77.44.40', port: 22, username: 'root', password: 'Nova#vps2025' });
