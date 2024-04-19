import { NextResponse } from 'next/server';
// import Cookies from 'js-cookie';

export function middleware(request) {

  // Retrieve the JWT token from the request's cookies
  let jwtToken = request.cookies.get('token');
  console.log("jwt token", jwtToken);

  if (jwtToken) {
    return NextResponse.next();
  }
  return NextResponse.redirect('http://localhost:3000/AddArticle/login');
}

export const config = {
  matcher: ['/AddArticle',]
};
