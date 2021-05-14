type VerifyUserFn = (user: User, sendValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sendValue) => {
  return (
    user.username === sendValue.username && user.password === sendValue.password
  );
};

const bdUser = { username: 'Wene', password: 'alves0014' };
const sendUser = { username: 'Wene', password: 'alves0014' };

const loggedIn = verifyUser(bdUser, sendUser);

console.log(loggedIn);
