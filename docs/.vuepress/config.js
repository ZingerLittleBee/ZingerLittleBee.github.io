module.exports = {
    title: "Let's code bug",
    description: "This is a buger",
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
      ]
    }
  }