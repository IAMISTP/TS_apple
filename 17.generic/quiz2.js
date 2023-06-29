"use strict";
{
    function changeType(x) {
        return JSON.parse(x);
    }
    let data = '{"name" : "dog", "age" : 1 }';
    let result = changeType(data);
}
