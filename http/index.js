import { instanceA, instanceB } from './http_interceptor';

export default {
  createApis(urls, httpType) {
    return Object.keys(urls).reduce((sumApi, key) => {
      const orginalOption = urls[key];
      if (!orginalOption.url) {
        sumApi[key] = this.createApis(orginalOption, httpType);
      } else {
        sumApi[key] = (data, options) => { // 注意:  这里也可以在调用的时候配置,可以直接覆盖默认的 !!!!!!!!!!!!!
          const method = (orginalOption.method || 'GET').toUpperCase();
          options = { ...orginalOption, ...options };
          switch (method) {
            case 'POST':
              options.data = data;
              break;
            case 'GET':
              options.params = data || {};
              break;
          }
          return httpType.request(options);
        };
      }
      return sumApi;
    }, {});
  },

  init(Vue, urls) {
    Vue.$http = this.createApis(urls, instanceA);
    Vue.$httpOrg = this.createApis(urls, instanceB);
  },
};
