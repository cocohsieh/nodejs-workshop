const fs = require('fs');

        function readFile(filename, encoding) {
            //建立promise物件
            return new Promise((resolve, reject) => {
                //resolve -> 執行promise成功
                fs.readFile(filename, encoding, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            });
        };

        readFile('hello.txt', 'utf-8')
            .then((data) => { console.log(data) }) //成功
            .catch((err) => { console.log(err) }) //失敗