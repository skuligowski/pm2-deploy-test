module.exports = {
  apps: [{
    name: 'pm-deploy-test',
    script: './index.js',
    instances: 2,            
    autorestart: true,       
    watch: false,            
    max_memory_restart: '1G',
    env: {                   
      NODE_ENV: 'development'
    },                      
    env_production: {       
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: 'osmc',
      host: '192.168.0.213',
      key: '~/.ssh/id_rsa.pub',
      ref: 'origin/master',
      repo: 'git@github.com:skuligowski/pm2-deploy-test.git',
      path: '/home/osmc/pm2-deploy-test',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
}
