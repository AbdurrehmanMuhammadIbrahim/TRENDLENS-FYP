// import { NextResponse } from 'next/server';
// // import Cookies from 'js-cookie';

// export function middleware(request) {

//   // Retrieve the JWT token from the request's cookies
//   let jwtToken = request.cookies.get('token');
//   console.log("jwt token", jwtToken);

//   if (jwtToken) {
//     return NextResponse.next();
//   }

//   const header = new Headers()
//   header.set("redirect", "/login")
//   return NextResponse.next({
//     request: {
//       headers: header
//     }
//   })

//   // return NextResponse.redirect('http://localhost:3000/login');
// }

// export const config = {
//   matcher: ['/Articles','/Articles/SingleArticle']
// };




import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({


  // Add locales you want in the app
  locales: ['en', 'ur'],

  // Default locale if no match
  defaultLocale: 'en'
});
export default middleware;


export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ur|en)/:page*','/Contact','/About','/Articles/AllArticles','/AddArticle']

};