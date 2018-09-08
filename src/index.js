import './css/main.css';
import './js/main.js';
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./js/lib/qr-scanner-worker.min.js');
