exports.baseUrl = () => {
  const url = {
    devUrl: 'http://localhost:3000',
  };
  
  function getBaseUrl(env) {
    let baseUrl;
    if (env == 'production') {
      baseUrl = url.prodUrl
    } else {
      baseUrl = url.devUrl;
    }

    return baseUrl;
  }
  

  return getBaseUrl;
}

exports.mongo = () =>{
  const mongo = {
    devUrl: "mongodb://localhost:27017",
  };

  function getMongoUrl(env) {
    let mongoUrl;
    if (env == 'production') {
      mongoUrl = mongo.prodUrl;
    } else {
      mongoUrl = mongo.devUrl;
    }

    return mongoUrl;
  }

  return getMongoUrl;
}
