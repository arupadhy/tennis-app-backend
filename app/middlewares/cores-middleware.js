class Middlewares {

  static enableCors(req, res, next) {
    console.log('@@@@ enableCors called @@@@@@@');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Session-Nonce");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  }
}

module.exports = Middlewares;