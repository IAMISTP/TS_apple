"use strict";
{
    let userInfo = ({ user, comment, admin }) => {
        console.log(user, comment, admin);
    };
    userInfo({ user: 'kim', comment: [3, 5, 4], admin: false });
}
