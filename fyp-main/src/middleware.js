import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';


// Create middleware for next-intl
// const intlMiddleware = createMiddleware({
//   locales: ['en', 'ur'],
//   defaultLocale: 'en'
// });



// export function middleware(request) {
  
//     const jwtToken = request.cookies.get('token');
 
//   if ( request.nextUrl.pathname === '/en/AddArticle'){
//     if (jwtToken){
//     return intlMiddleware(request);
//     }else if (!jwtToken){
//       const url = request.nextUrl.clone()
//       url.pathname = '/en/AddArticle/login';
//       return NextResponse.rewrite(url)
//     }else {
//       return intlMiddleware(request);
//       }

   
//   } else if(request.nextUrl.pathname === '/ur/AddArticle'){
//     if (jwtToken){
//       return intlMiddleware(request);
//       }
//       else{
//         const url = request.nextUrl.clone()
//         url.pathname = '/ur/AddArticle/login';
//         return NextResponse.rewrite(url)
//       }
  
//   } else{
//     return intlMiddleware(request);
//   }
 
// }
const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['en', 'ur'],

  // Default locale if no match
  defaultLocale: 'en'
});

export default middleware;

// matcher for the next-intl middleware
export const config = {
  // Match routes for internationalization and other routes
  matcher: ['/', '/(ur|en)/:page*', '/Contact', '/About', '/Articles/AllArticles', '/AddArticle', '/AddArticle/login']
};
