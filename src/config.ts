export const domain = `http://ftmediadev.yourhostingspace.com`
// export const domain = `http://media.feitian1.org`
export const prefix: string = process.env.NODE_ENV === 'development' ? domain : ``
export default Object.freeze({
  getLatest: `${prefix}/media/category/ajax-search/q/category186/useApi/1/page/`,
  article: `${prefix}/media/view/item/e/`,
  search: `${prefix}/media/category/ajax-search/q/`,
  xlmns: 'http://www.w3.org/2000/svg',
  translation: `${prefix}/api/home/translation`,
  login: `${prefix}/api/core/greeting`,
  loginApi: `${prefix}/user/api/login`,
  categoryTerm: [
    ['cterm1210', 'Latest in Shen Yun Videos', '/media/category#1210_1210_Shen%20Yun%20Videos'],
    ['cterm1211', 'Latest in Current Affairs', '/media/category#1211_1211_Latest%20Current%20Affairs'],
    ['cterm630', 'Latest in Dance', '/media/category#630_630_Dance'],
    ['cterm631', 'Latest in Music', '/media/category#631_631_Music'],
    ['cterm1125', 'Latest in Culture', '/media/category#1125_1125_Culture'],
    ['cterm1126', 'Latest in Truth Clarification', '/media/category#1126_1126_Truth'],
  ],
  authrizedIps: ['24.103.126.108', '98.252.204.23', '71.236.16.142', '127.0.0.1', '69.193.129.122'],
  validationImg: `${prefix}/captcha/verification/draw?r=`,
  validations: {
    // all our validation rules go here
    name: {
      required: {
        value: true,
        message: 'Please enter your name.',
      },
      // pattern: {
      //   value: '^[A-Za-z]*$',
      //   message: 'Please enter your name.',
      // },
    },
    email: {
      required: {
        value: true,
        message: 'Please enter your email address.',
      },
      // pattern: {
      //   value:
      //     '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
      //   message: 'Please enter your email address.',
      // },
    },
    verificationCode: {
      required: {
        value: true,
        message: 'Please enter the verification code inside the image.',
      },
      // pattern: {
      //   value: '^[A-Za-z]*$',
      //   message: 'Please enter the verification code inside the image.',
      // },
    },
  },
})
