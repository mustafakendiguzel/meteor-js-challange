Template.publicPagesHome.onCreated(function () {
  this.state = new ReactiveDict(null, {
    news: [],
    deneme: 'muti',
  });
  this.states = new ReactiveDict(null, {
    sd: [],
  });
});

Template.publicPagesHome.onRendered(function () {
  const self = this;
  const apiUrl =
    'https://api.collectapi.com/news/getNews?country=tr&tag=general';
  this.autorun(function () {
    const key = '';
    const listOptions = {
      headers: {
        authorization: `apikey ${key}`,
        'content-type': 'application/json',
      },
    };
    HTTP.call('GET', apiUrl, listOptions, function (error, result) {
      if (error) {
        throw new Meteor.Error(error.message);
      }
      const data = JSON.parse(result.content).result;
      self.state.set('news', data);
    });
    console.log(self.state.get('deneme'));
  });
});
