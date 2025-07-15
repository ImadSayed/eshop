<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UsersController extends Controller
{
    public function index()
    {
        // var_dump("gggg");
        $levels = [
            1 => 'default',
            2 => 'admin'
        ];

        $default_users = User::where('level_id', 1)
            ->orWhereNull('level_id')
            ->get()
            ->map(function($user) use ($levels) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'created_at' => date('Y-m-d', strtotime($user->created_at)),
                    'level' => $levels[$user->level_id] ?? 'unknown'
                ];
            });

        $loggedInUserId = Auth::user()->id;
        $admin_users = User::where('level_id', '>', 1)
            ->where('id', '!=', $loggedInUserId)
            ->get()
            ->map(function($user) use ($levels) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'created_at' => date('Y-m-d', strtotime($user->created_at)),
                    'level' => $levels[$user->level_id] ?? 'unknown'
                ];
            });
        return Inertia::render('users/index', [
            'isAdmin' => $this->isAdmin(),
            'defaultUsers' => $default_users,
            'adminUsers' => $admin_users
        ]);
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('users/edit', [
            'isAdmin' => $this->isAdmin(),
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'level' => $user->level_id,
        ]);
    }

    public function update(Request $request)
    {
        if (Auth::user()->id === $request->id) {
            return redirect()->route('users.index')->with('warning', 'You cannot update your own account.');//->status(403);
        }
        $user = User::findOrFail($request->id);
        $user->level_id = $request->level;
        $user->save();

        return redirect()->route('users.index')->with('success', 'User updated successfully.');//->status(200);
    }
}
