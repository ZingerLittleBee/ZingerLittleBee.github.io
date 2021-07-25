module.exports = {
    title: "Let's code bug",
    description: "This is a bugger's repository",
    base: '/',
    themeConfig: {
      nav: [
        {
          text: '语言',
          ariaLabel: 'lang',
          items: [
            {
              items: [
                { text: 'Java', link: '/lang/java/' },
                { text: 'JavaScript', link: '/lang/js/' },
                { text: 'TypeScript', link: '/lang/ts/' },
                { text: 'NodeJS', link: '/lang/nodejs/' },
              ]
            }
          ]
        },
        {
          text: '框架',
          ariaLabel: 'framework',
          items: [
            {
              items: [
                { text: 'Spring', link: '/framework/spring/' },
                { text: 'Vue', link: '/framework/vue/' },
                { text: 'React', link: '/framework/react/' }
              ]
            }
          ]
        },
        {
          text: 'Linux',
          ariaLabel: 'linux',
          link: '/system/linux/'
        },
        {
          text: 'Docker',
          ariaLabel: 'docker',
          link: '/tool/docker/'
        }
      ],
      sidebar: {
        '/tool/docker/': [
            'install',
            '安装命令'
        ],
        '/system/linux/': [
            'iptables'
        ],
        '/framework/vue/': [
            'Vue响应式代码实现之defineProperties'
        ]
      }
    }
  }