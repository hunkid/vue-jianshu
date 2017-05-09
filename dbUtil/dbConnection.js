/**
 * Created by zhouxiong on 16/12/19.
 */

var mysql = require('mysql')

var options = {
  host: 'localhost',
  port: 3333,
  user: 'admin',
  password: 'admin',
  database: 'jianshu'
}

var connection = mysql.createConnection(options)

module.exports = connection
