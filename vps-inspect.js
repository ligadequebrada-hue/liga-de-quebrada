const { Client } = require('ssh2');
const c = new Client();
c.on('ready', () => {
  console.log('Connected');
  c.exec([
    'docker inspect r80oo8wwo4wgkk8sos40w44w-181848229375 --format "{{.Config.Labels}}" 2>/dev/null | tr " " "\\n" | grep traefik',
    'echo "=== COMPOSE PROJECT ==="',
    'docker inspect r80oo8wwo4wgkk8sos40w44w-181848229375 --format "{{index .Config.Labels \"com.docker.compose.project.working_dir\"}}" 2>/dev/null',
    'echo "=== COMPOSE CONFIG ==="',
    'docker inspect r80oo8wwo4wgkk8sos40w44w-181848229375 --format "{{index .Config.Labels \"com.docker.compose.project.config_files\"}}" 2>/dev/null'
  ].join(' ; '), (err, stream) => {
    if (err) { console.error(err); c.end(); return; }
    stream.on('data', d => process.stdout.write(d));
    stream.stderr.on('data', d => process.stderr.write(d));
    stream.on('close', () => c.end());
  });
}).connect({ host: '187.77.44.40', port: 22, username: 'root', password: 'Nova#vps2025' });
