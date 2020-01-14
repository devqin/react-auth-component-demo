import React from 'react';

// interface IUserInfo {
//   avatar: string;
//   email: string;
//   id: number;
//   mobile: string;
//   name: string;
//   permission: any;
//   menuList: any;
// }
// let context: IUserInfo;
export default React.createContext({ permission: ['add-btn', 'update-btn'] });