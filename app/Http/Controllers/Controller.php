<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

abstract class Controller
{
    //

    protected function isAdmin()
    {
        if (!Auth::user()) {
            return false;
        }
        $loggedInUserId = Auth::user()->id;
        $loggedInUser = User::find($loggedInUserId);

        return $loggedInUser->level_id > 1;
    }
}
