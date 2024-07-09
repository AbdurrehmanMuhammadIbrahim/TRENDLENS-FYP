import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

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
