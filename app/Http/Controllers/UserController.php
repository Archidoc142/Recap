<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function toggleLightMode()
    {
        $user = Auth::user();

        $user->light_mode = !$user->light_mode;
        $user->save();

        return redirect()->back();
    }

    public function signet()
    {
        return Inertia::render('Profile/Signet', [
            'signets' => Auth::user()->signets,
        ]);
    }

    public function sujets()
    {
        return Inertia::render('Profile/Sujets', [
            'sujets' => Auth::user()->sujets,
        ]);
    }
}
