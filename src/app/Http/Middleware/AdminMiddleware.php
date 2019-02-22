<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Model\User;

class AdminMiddleware {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        $user = User::all()->count();
        if (!($user == 1)) {
            //If user does //not have this permission
            if (!Auth::user()->hasPermissionTo(PERMISSION_OF_ADMIN)) {
                // abort('401');
            }
        }

        return $next($request);
    }

}
