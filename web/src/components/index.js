// const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/);

// req.keys().forEach((key) => {
//   const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
//   module.exports[componentName] = req(key).default;
// });

// export { default as  } from './';
export { default as AuthRoute } from './AuthRoute';
export { default as Input } from './Input';
export { default as LoginForm } from './LoginForm';
export { default as Navbar } from './Navbar';
export { default as NotFound } from './NotFound';
export { default as PrivateRoute } from './PrivateRoute';
export { default as SignupForm } from './SignupForm';
