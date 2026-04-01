const { Client } = require('ssh2');
const c = new Client();
c.on('ready', () => {
  console.log('Connected to VPS');
  const cmd = [
    'export NVM_DIR="$HOME/.nvm"',
    '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"',
    'cd /var/www/liga-de-quebrada',
    'git pull',
    'npm run build',
    'pm2 restart all',
    'pm2 status'
  ].join(' && ');
  c.exec(cmd, (err, stream) => {
    if (err) { console.error(err); c.end(); return; }
    let out = '';
    stream.on('data', d => { out += d; process.stdout.write(d); });
    stream.stderr.on('data', d => { out += d; process.stderr.write(d); });
    stream.on('close', () => { c.end(); });
  });
}).connect({ host: '187.77.44.40', port: 22, username: 'root', password: 'Nova#vps2025' });
