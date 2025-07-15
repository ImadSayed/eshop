<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            if ($this->isAdmin()) {
                return $next($request);
            }
            abort(403);
        }
        abort(401);
    }

    private function isAdmin()
    {
        if (!Auth::user()) {
            return false;
        }
        $loggedInUserId = Auth::user()->id;
        $loggedInUser = User::find($loggedInUserId);
        return $loggedInUser->level_id > 1;
    }
}
