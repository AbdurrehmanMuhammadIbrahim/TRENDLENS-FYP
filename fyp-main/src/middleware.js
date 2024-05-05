// import { NextResponse } from 'next/server';
// import createMiddleware from 'next-intl/middleware';

// // Create middleware for next-intl
// const intlMiddleware = createMiddleware({
//   locales: ['en', 'ur'],
//   defaultLocale: 'en'
// });

// // Define the middleware function
// export function middleware(request) {
//   try {
//     // Retrieve the JWT token from the request's cookies
//     const jwtToken = request.cookies.get('token');

//     // If JWT token is not defined and the user is trying to access /AddArticle, redirect to /Login
//     if (!jwtToken && request.url.pathname === '/AddArticle') {
//       console.log("jwt-token", jwtToken);

//       const headers = new Headers();
//       headers.set("Location", "/AddArticle/login");
//       return NextResponse.redirect(302, "/AddArticle/login", { headers });
//     }

//     // For all other routes or if JWT token is defined, proceed with next-intl middleware
//    if (jwtToken){
//     // return middleware(request)
//     return intlMiddleware(request);
//    }else if(!jwtToken){
//     return middleware(request)
//     // return intlMiddleware(request);
//    };

//   } catch (error) {
//     console.error("Error in middleware:", error);
//     // If an error occurs, proceed with next-intl middleware
//     // return intlMiddleware(request);
//   }
// }

// // // Define matchers for the next-intl middleware
// // export const config = {
// //   // Match routes requiring authentication with JWT
// //   matcher: ['/(ur|en)/:page*','/AddArticle']
// // };

// export const config = {
//   // Match other routes
//   matcher: ['/', '/(ur|en)/:page*', '/Contact', '/About', '/Articles/AllArticles','/AddArticle']
// };




import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';


// Create middleware for next-intl
const intlMiddleware = createMiddleware({
  locales: ['en', 'ur'],
  defaultLocale: 'en'
});

// Define the middleware function
export function middleware(request) {
  // try {
  //   // Retrieve the JWT token from the request's cookies
    const jwtToken = request.cookies.get('token');
  //   // If JWT token is not defined and the user is trying to access /AddArticle, redirect to /AddArticle/login
  //   if (!jwtToken && request.nextUrl.pathname === '/en/AddArticle') {
  //     // const headers = new Headers();
  //     // headers.set("Location", "http://localhost:3000/AddArticle/login");
  //     // return NextResponse.redirect(302, "http://localhost:3000/AddArticle/login", { headers });
  //     const url = request.nextUrl.clone()
  //     url.pathname = '/en/AddArticle/login';
  //     return NextResponse.rewrite(url)
  //   }

  //   // If JWT token is defined or for other routes, proceed with next-intl middleware
  //   if (jwtToken || request.nextUrl.pathname === '/en/AddArticle') {
  //     return intlMiddleware(request);
  //   } 
  //   else if (!jwtToken){
  //     // For routes without JWT tokens, proceed with next-intl middleware
  //     return intlMiddleware(request);
  //   }

  // } catch (error) {
  //   console.error("Error in middleware:", error);
  //   // If an error occurs, return a response indicating server error
  //   return new Response("Server error", { status: 500 });
  // }
  if ( request.nextUrl.pathname === '/en/AddArticle') {
    if (jwtToken){
    return intlMiddleware(request);
    }else{
      const url = request.nextUrl.clone()
      url.pathname = '/en/AddArticle/login';
      return NextResponse.rewrite(url)
    }
  }else{
    return intlMiddleware(request);
  }

}

// Define the matcher for the next-intl middleware
export const config = {
  // Match routes for internationalization and other routes
  matcher: ['/', '/(ur|en)/:page*', '/Contact', '/About', '/Articles/AllArticles', '/AddArticle']
};
