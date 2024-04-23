

// export function middleware(request) {

//   // Retrieve the JWT token from the request's cookies
//   let jwtToken = request.cookies.get('token');
//   console.log("jwt token", jwtToken);

//   if (jwtToken) {
//     return NextResponse.next();
//   }
//   return NextResponse.redirect('http://localhost:3000/AddArticle/login');
// }

// export const config = {
//   matcher: ['/AddArticle',]
// };

// import { NextResponse } from 'next/server';
// import Cookies from 'js-cookie';
import createMiddleware from 'next-intl/middleware';
// import { useParams } from 'next/navigation'
// const  middleware =(request) =>{
//   // Add locales you want in the app

//     let jwtToken = request.cookies.get('token')
//     console.log("jwt token", jwtToken)
  
//     if (jwtToken) {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect('http://localhost:3000/AddArticle/login');
//   };
//   export default middleware;

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

