module.exports = {
  apps: [{
    name: 'pm-deploy-test',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'osmc',
      host: '192.168.0.213',
      key: '~/.ssh/id_rsa.pub',
      ref: 'origin/master',
      repo: 'git@github.com:skuligowski/pm2-deploy-test.git',
      path: '/home/osmc/pm2-deploy-test',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
